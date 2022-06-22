const express = require("express");
const axios = require("axios");
const { signedCookies } = require("cookie-parser");
const { request } = require("express");

const router = express.Router();

router.get("/test", async(req, res, next)=>{
    try{
        if (!req.session.jwt){ // 세션에 토큰이 없다
            const tokenResult = await axios.post("http://localhost:8002/vi/token",{
                clientSecret : process.env.CLIENT_SECRET,
            });
            if (tokenResult.data && tokenResult.data.code === 200){ // 토큰 발급성공
                req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장
            } else{ // 토큰 발급 실패
                return res.json(tokenResult.data); // 발급 실패 사유 응답한다.
            }
        }
        // 발급받은 토큰 테스트
        const result = await axios.get("http://localhost:8002/v1/test",{
            headers : {authorization : req.session.jwt},
        });
    } catch(err){
        if (err.response.status === 419) {// 토큰 만료되면 재발급 받기
            delete req.session.jwt;
            return request(req, api);
        }
        return err.response;
    }
});

module.exports = router;