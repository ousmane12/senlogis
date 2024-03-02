import { Injectable } from '@angular/core';
import { Appartment } from '../model/appartment';
import { FileHandle } from '../model/file-handles';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

constructor(private domSanitizer: DomSanitizer) { }

createImages(product: any){
  const images: any[] = product.images;
  console.log("creating", product);
  
  if(images.length > 0){
  const imagesToFileHandle: FileHandle[] = [];
  for (let i = 0; i < images.length; i++){
    const imageData = images[i];
    const imgBlob = this.dataURItoBlob(imageData.picByte, imageData.type);
    const file = new File([imgBlob], imageData.name, {type: imageData.type});
    const finalFile: FileHandle = {
      file: file,
      url: this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
    };
    imagesToFileHandle.push(finalFile);
  }
  product.images = imagesToFileHandle;
  return product;
}
return product;
}

createImage(product: any){
  if(product.image != null){
    const imageData = product.image;
    const imgBlob = this.dataURItoBlob(imageData.picByte, imageData.type);
    const file = new File([imgBlob], imageData.name, {type: imageData.type});
    const finalFile: FileHandle = {
      file: file,
      url: this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
    };
  product.images = finalFile;
  return product;
  }

  return product;
}


dataURItoBlob(picByte: any, imageType: any){
  const byteString = window.atob(picByte);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++){
    int8Array[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([int8Array], {type: imageType});
  return blob;
}

}
