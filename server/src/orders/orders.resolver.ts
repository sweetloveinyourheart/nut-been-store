import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/order.input';
import { Order, OrderStatus } from './models/order.model';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [Order])
  async GetShopOrders(
    @Args('cursor') cursor: number
  ): Promise<Order[]> {
    return this.ordersService.getOrders(cursor)
  }

  @Mutation(() => Order)
  async CreateOrder(@Args('order') order: CreateOrderInput): Promise<Order> {
    return this.ordersService.createOrder(order)
  }

  @Mutation(() => Order)
  async ChangeOrderStatus(
    @Args('id') id: string,
    @Args('status') status: OrderStatus
  ): Promise<Order> {
    return this.ordersService.changeOrderStatus(id, status)
  }
}
