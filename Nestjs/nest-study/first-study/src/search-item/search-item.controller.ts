import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update_item.dto';
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

    @Delete("/:id")
    remove(@Param("id") 변수명: string){
        return this.searchItemService.deleteOne(변수명);
    }

    @Patch("/:id")
    update(@Param("id") 변수명: string, @Body() 변수명2: UpdateItemDto){
        return this.searchItemService.update(변수명, 변수명2);
    }
}
