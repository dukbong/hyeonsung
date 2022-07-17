import { Test, TestingModule } from '@nestjs/testing';
import { SearchItemService } from './search-item.service';

describe('SearchItemService', () => {
  let service: SearchItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchItemService],
    }).compile();

    service = module.get<SearchItemService>(SearchItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
