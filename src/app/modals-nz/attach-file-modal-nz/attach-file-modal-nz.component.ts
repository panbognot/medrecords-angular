import { Component, Input, OnInit } from '@angular/core';

import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  NzUploadChangeParam, NzUploadFile
} from 'ng-zorro-antd/upload';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'attach-file-modal-nz',
  templateUrl: './attach-file-modal-nz.component.html',
  styleUrls: ['./attach-file-modal-nz.component.scss']
})
export class AttachFileModalNzComponent implements OnInit {

  @Input() consent?: any;
  apiUrl = "https://www.mocky.io/v2/5cc8019d300000980a055e76";
  previewImage: string | undefined = '';
  previewVisible = false;

  fileList: NzUploadFile[] = [
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    // {
    //   uid: '-xxx',
    //   percent: 50,
    //   name: 'image.png',
    //   status: 'uploading',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    // },
    // {
    //   uid: '-5',
    //   name: 'image.png',
    //   status: 'error'
    // }
  ];

  constructor(
    private modal: NzModalRef,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
  }

  destroyModal(): void {
    console.log("destroyModal():");
    this.modal.close();
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;

    // Setting this to TRUE shows the preview modal
    this.previewVisible = true;
  }

}
