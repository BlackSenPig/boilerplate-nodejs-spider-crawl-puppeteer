import { Get, Query, Res, Route, Tags, TsoaResponse } from "tsoa";
import crawlService from "services/crawl/crawl.service";
import { ResponseMessage } from "./response/common.res";

interface Response {
  responseCode: number;
  data: string;
}

@Route("crawl")
@Tags("Crawl")
export class CrawlController {
  @Get("/")
  public async text(
    @Res() notFoundResponse: TsoaResponse<404, ResponseMessage>,
    @Query() headless?: boolean,
  ): Promise<Response> {
    return {
      responseCode: 200,
      data: await crawlService.exampleCrawl(headless).catch((error: string) => {
        return notFoundResponse(404, {
          responseCode: 404,
          isSuccess: false,
          message: error,
        });
      }),
    };
  }
}
