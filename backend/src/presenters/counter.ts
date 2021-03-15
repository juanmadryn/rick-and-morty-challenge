import { BaseContext } from "koa";
import { request, summary, responsesAll, tagsAll } from "koa-swagger-decorator";
import { countCharOccurrencesInEntityNames } from "../services/counter";
import { CounterResult, Counters } from "../types/counter";

@responsesAll({
  200: { description: "success" },
  400: { description: "bad request" },
})
@tagsAll(["Counter"])
export default class CounterPresenter {
  @request("get", "/api/count")
  @summary("count char occurrences in entity names")
  public static async countCharOccurrencesInEntityNames(
    ctx: BaseContext
  ): Promise<void> {
    try {
       // moment of execution's start
      const hrstart = process.hrtime();
       // I get the counters
      const counters: Counters = await countCharOccurrencesInEntityNames();
      // momento of execution's end
      const hrend = process.hrtime(hrstart);
      const result: CounterResult = {
        counters: counters,
        timeOfExecution: hrend[0]+'s.' + hrend[1]
      }
      ctx.body = result;
      ctx.status = 200;
      ctx.message = "Ok";
    } catch (error) {
      ctx.status = 500;
      ctx.message = error.message;
    }
  }
}
