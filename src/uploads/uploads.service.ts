import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
  async handleFileUpload(file: Express.Multer.File): Promise<string> {
    console.log('File uploaded:', file); // Just log the file information here
    return file.filename; // Return the filename
  }
}
