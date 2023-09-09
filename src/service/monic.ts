import { IBackendFramework } from "../interface/IBackendFramework";

export class Monic implements IBackendFramework {
  GET(url: string): string {
    let message = `Reading ${url}...`;
    if (url.startsWith("https://")) {
      message += " This website is so secure!";
    }
    return message;
  }

  POST(url: string, data: string): string {
    let message = `Posting ${data} to ${url}...`;
    if (url.startsWith("https://")) {
      message += " This website is so secure!";
    }
    if (data.startsWith("{") && data.endsWith("}")) {
      message += " JSON is coming!";
    }
    return message;
  }
}
