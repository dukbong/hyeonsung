import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemDto } from './dto/create-item.dto';
import { Item } from './entities/Item.entity';
import { SearchItemService } from './search-item.service';
@Controller('/search')
export class SearchItemController {
    constructor(private readonly searchItemService: SearchItemService){}
    @Get()
    get(): Item[]{
        return this.searchItemService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") 변수:string): Item{
        return this.searchItemService.getOne(변수);
    }

    @Post()
    create(@Body() 변수명: ItemDto){
        return this.searchItemService.create(변수명);
    }

    @Delete()
    remove(){
        return "This is deleteDate";
    }

    @Patch()
    update(){
        return "This is Update";
    }
}
