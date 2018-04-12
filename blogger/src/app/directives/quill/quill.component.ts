import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import * as Quill from 'quill';
 
@Component({
  selector: 'quill-editor',
  styleUrls: ['./quill.component.css'],
  templateUrl: './quill.component.html'
})


export class QuillComponent {
  editor: any
  editorElem: HTMLElement;
  @Input() text;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(): void {

    this.editorElem = this.elementRef.nativeElement.children[0];
    this.editor  = new Quill('#editor', {
      theme: 'snow'
    });

    if (this.text) {
      this.editor.pasteHTML(this.text);
    }

    this.editor.on('text-change', (e) => {
      this.text = e;
      let html = this.editorElem.children[0].innerHTML;
      if(html === "<p><br></p>")
        html = null;
      this.messageEvent.emit(html)
    });
   
  }
}