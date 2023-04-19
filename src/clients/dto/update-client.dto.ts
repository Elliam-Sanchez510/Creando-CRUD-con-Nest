import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDTo } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDTo) {}
