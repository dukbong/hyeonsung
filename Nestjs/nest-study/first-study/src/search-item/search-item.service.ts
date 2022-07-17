import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update_item.dto';
import { Item } from './entities/Item.entity';

@Injectable()
export class SearchItemService {
    private items: Item[] = [];

    getAll(): Item[]{
        return this.items;
    }

    getOne(id: string): Item{
        const item = this.items.find(item => item.id === parseInt(id));
        if(!item){
            throw new NotFoundException(`찾으시는 id : ${id} 존재하지 않습니다.`);
        }
        return item;
    }

    create(itemData: ItemDto){
        let Pid: number;
        if( this.items.length === 0){
            Pid = 1;
        }else{
            Pid = this.items[this.items.length - 1].id + 1;
        }
        this.items.push({
            id: Pid,
            ...itemData,
        });
        return itemData;
    }

    deleteOne(id: string){
        this.getOne(id);
        this.items = this.items.filter((v)=>v.id  !== parseInt(id));
        return true;
    }

    update(id: string, updateData: UpdateItemDto){
        const item = this.getOne(id);
        this.deleteOne(id);
        this.items.push({
            ...item,
            ...updateData,
        });
    }
        
}
