import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(public powerService: PowerService) { }

    getData() {
        console.log("Drawing 5 watts of Power");
        this.powerService.supplyPower(5);
        return "hey there";
    }

}
