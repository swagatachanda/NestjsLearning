import { Injectable, Logger } from '@nestjs/common'

export interface Result {
    number1: number
    number2: number
    result: number
}

@Injectable()
export class OperationService {
    add(num1: number, num2: number): Result {
        console.log(num1, num2)
        return {
            number1: num1,
            number2: num2,
            result: num1 + num2,
        }
    }

    substract(num1: number, num2: number): Result {
        return {
            number1: num1,
            number2: num2,
            result: num2 - num1,
        }
    }

    multiply(num1: number, num2: number): Result {
        return {
            number1: num1,
            number2: num2,
            result: num1 * num2,
        }
    }
}
