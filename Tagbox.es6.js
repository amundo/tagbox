class Tagbox {
  constructor(el){
    this.el = el;
    this.listen();
  }

  extractTags(text){
    var tags = text.split(/[ \.\?\!]+/g)
      .filter(w => w.startsWith('#'))
      .map(t => t.slice(1, t.length));

    return tags;
  }
  
  parseTags(ev){
    this.tags = this.extractTags(ev.target.value);
  }
 
  set tags(tags){
    this.el.dataset.tags = JSON.stringify(tags);
    return JSON.stringify(tags);
  }

  get tags(){
    return JSON.parse(this.el.dataset.tags)
  }

  listen(){
    this.el.addEventListener('keyup', ev => this.parseTags(ev));
  }
}
