import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(public powerService: PowerService) { }

    compute(a: number, b: number) {
        console.log("Removing 10 watts of Power");
        this.powerService.supplyPower(10);
        return a + b;
    }
}
