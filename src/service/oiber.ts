import { IBackendFramework } from "../interface/IBackendFramework";

export class Oiber implements IBackendFramework {
  GET(url: string): string {
    let message = `Getting ${url}...`;
    if (url.startsWith("http://")) {
      message += " Warning! This website is not secure.";
    }
    return message;
  }

  POST(url: string, data: string): string {
    if (url !== undefined && url.startsWith("http://")) {
      let message = `Sending ${data} to ${url}...`;
      if (url.startsWith("http://")) {
        message += " Warning! This website is not secure.";
      }
      if (data.startsWith("<?xml")) {
        message += " XML is too verbose!";
      }
      return message;
    }
    return "";
  }
}
