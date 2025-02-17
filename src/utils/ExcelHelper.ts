import * as EXCEL from 'xlsx';
import fs from 'fs';
import path from 'path';

interface TestRecord {
    BannerText: string;
    NewsLink: string;
    AdvLink: string;
};

export function readExcelFile() {
    const pathname = path.join(__filename, '../../../test-data/qa/test.xlsx');
    const file = fs.readFileSync(pathname);
    const workbook = EXCEL.read(file);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });
    const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
        BannerText: column[0],
        NewsLink: column[1],
        AdvLink: column[2],
    }));

    return records;

}