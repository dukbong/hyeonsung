import { Test, TestingModule } from '@nestjs/testing';
import { SearchItemController } from './search-item.controller';

describe('SearchItemController', () => {
  let controller: SearchItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchItemController],
    }).compile();

    controller = module.get<SearchItemController>(SearchItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
