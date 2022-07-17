import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchItemController } from './search-item/search-item.controller';
import { SearchItemService } from './search-item/search-item.service';

@Module({
  imports: [],
  controllers: [AppController, SearchItemController],
  providers: [AppService, SearchItemService],
})
export class AppModule {}
