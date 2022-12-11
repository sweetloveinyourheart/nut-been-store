import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderInput } from './dto/order.input';
import { OrderStatus } from './models/order.model';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>
    ) {}

    async createOrder(order: CreateOrderInput): Promise<Order> {
        try {
            const newOrder = await this.orderModel.create({
                ...order,
                created_at: new Date()
            })
            return await newOrder.save()            
        } catch (error) {
            throw new BadRequestException()
        }
    }

    async changeOrderStatus(order_id: string, status: OrderStatus): Promise<Order> {
        try {
            return await this.orderModel.findByIdAndUpdate(order_id, { status })
        } catch (error) {
            throw new NotFoundException()
        }
    }

    async getOrders(cursor: number): Promise<Order[]> {
        try {
            return await this.orderModel.find().sort({ created_at: -1 }).skip(cursor).limit(20)
        } catch (error) {
            return []
        }
    }
}
