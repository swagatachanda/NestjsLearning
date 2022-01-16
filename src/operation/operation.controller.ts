import { Controller, Get, Logger, Param, ParseIntPipe } from '@nestjs/common'
import { OperationService } from './operation.service'

interface AllParams {
    num1: number
    num2: number
}

@Controller('/operation')
export class OperationController {
    constructor(private operationService: OperationService) {}
    @Get('/add/:num1/:num2')
    add(
        @Param('num1', ParseIntPipe) operand1: number,
        @Param('num2', ParseIntPipe) operand2: number
    ) {
        return this.operationService.add(operand1, operand2)
    }

    @Get('/substract/:num1/:num2')
    substract(@Param() allParams: AllParams) {
        Logger.log(allParams, 'Substract')
        return this.operationService.substract(allParams.num1, allParams.num2)
    }

    @Get('/multiply/:num1/:num2')
    multiply(
        @Param('num1', ParseIntPipe) operand1: number,
        @Param('num2', ParseIntPipe) operand2: number
    ) {
        return this.operationService.multiply(operand1, operand2)
    }
}
