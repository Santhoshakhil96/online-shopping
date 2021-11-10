import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { IPost } from '../common/interface/userdata';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  post:IPost;

  

  @Output() postCreate = new EventEmitter<IPost>();
  
  constructor() { 
    this.post = {} as IPost;
  }

  ngOnInit() {
  }

  onAddPost(){
    let post = {
      name: this.post.name,
      content: this.post.content,
      date: this.post.date
    }
    this.postCreate.emit(post);
  }

}
