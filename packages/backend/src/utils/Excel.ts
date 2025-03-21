import {
  readFile,
  utils,
  WorkBook,
  WorkSheet,
  write,
  writeFile,
  WritingOptions,
} from "xlsx";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import Contact from "../types/Contact";

class Excel {
  private static instance: Excel;

  private workBook?: WorkBook;
  private workSheet?: WorkSheet;

  private _config = {
    savepath: "../../xlsx",
    sheetname: "contact sheet",
    filename: "dar al-nawati contact list",
    extension: "xlsx",
  };

  private filePath = join(
    __dirname,
    `${this._config.savepath}/${this._config.filename}.${this._config.extension}`
  );

  public constructor({ config }: { config?: Excel["_config"] } = {}) {
    if (config) this._config = { ...this._config, ...config };

    this.checkForFolder();
  }

  public static getInstance() {
    if (!Excel.instance) Excel.instance = new Excel();
    return Excel.instance;
  }

  private checkForFolder() {
    if (!existsSync(join(__dirname, this._config.savepath)))
      mkdirSync(join(__dirname, this._config.savepath));
  }

  public checkForPrevData(): Excel {
    if (existsSync(this.filePath)) {
      this.workBook = readFile(this.filePath);
      this.workSheet = this.workBook.Sheets[this._config.sheetname];
    }

    return Excel.instance;
  }

  public createBook(): Excel {
    if (!this.workBook) this.workBook = utils.book_new();
    return Excel.instance;
  }

  public createSheet(data: Contact): Excel {
    if (!this.workSheet)
      this.workSheet = utils.aoa_to_sheet([
        Object.keys(data).map((key) => key.toString()),
      ]);
    return Excel.instance;
  }

  public appendSheet(): Excel {
    if (
      !this.workBook ||
      !this.workSheet ||
      this.workBook.Sheets[this._config.sheetname]
    )
      return Excel.instance;

    utils.book_append_sheet(
      this.workBook,
      this.workSheet,
      this._config.sheetname
    );

    return Excel.instance;
  }

  public addRow(data: Contact): Excel {
    if (!this.workSheet) return Excel.instance;

    this.workSheet = utils.sheet_add_aoa(
      this.workSheet,
      [Object.values(data).map((value) => value.toString())],
      {
        origin: -1,
      }
    );

    return Excel.instance;
  }

  public makeFile(data: Contact): Excel {
    Excel.instance.createBook().createSheet(data).addRow(data).appendSheet();

    return Excel.instance;
  }

  public getBuffer({
    type = "buffer",
    bookType = this._config.extension as WritingOptions["bookType"],
  }: {
    type?: WritingOptions["type"];
    bookType?: WritingOptions["bookType"];
  } = {}): Buffer {
    if (!this.workBook) return Buffer.from("");

    return write(this.workBook, {
      bookType,
      type,
    });
  }

  public save({
    path = this.filePath,
  }: {
    path?: string;
  } = {}): Excel {
    if (!this.workBook || !this.workSheet) return Excel.instance;

    writeFile(this.workBook, path);

    return Excel.instance;
  }

  public clear(): Excel {
    this.workBook = undefined;
    this.workSheet = undefined;

    return Excel.instance;
  }

  public get config() {
    return this._config;
  }
}

export default Excel;
