import { IQueryContext, isEntity } from "../IQueryContext";
import IQueryNode from "./IQueryNode";

export default class PartitionKeyNode implements IQueryNode {
  evaluate(context: IQueryContext): any {
    if (isEntity(context)) {
      return context.PartitionKey
    }

    return null
  }

  toString(): string {
    return `PartitionKey`
  }
}