jQuery.fn.highlight = function(pat) {
 function innerHighlight(node, pat, title, atr_id) {
  var skip = 0; 
  if (node.nodeType == 3) {
    var pos = node.data.toUpperCase().indexOf(pat);
    if (pos >= 0) {
        var spannode = document.createElement('span');
        spannode.className = 'highlight';
        var middlebit = node.splitText(pos);
        var endbit = middlebit.splitText(pat.length);
        var middleclone = middlebit.cloneNode(true);
        spannode.appendChild(middleclone);
        //alert(middleclone);
        middlebit.parentNode.replaceChild(spannode, middlebit);
        skip = 1;
        title_arr.push([title, atr_id]);
        //console.log(title_arr);
    }
  }
  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
    for (var i = 0; i < node.childNodes.length; ++i) {
     i += innerHighlight(node.childNodes[i], pat, title, atr_id);
    }
  }
  return skip;
 }
 var title_arr = [];
 title_obj = {};
    this.each(function() {     
        var title = $(this).children().find('h2').text();
        var atr_id = $(this).attr('id'); 
        innerHighlight(this, pat.toUpperCase(), title, atr_id);
    });
    var li = '';
    //console.log(title_arr);
    if(title_arr.length < 1){
        li += '<li class="cls-no-result">No results found!</li>';
    }
    $.each(title_arr, function(i, item){
        title_obj[item] = item;
    });
    //console.log(title_obj);
    //ev.stopPropagation();
    $(".search-dropdown").slideDown();
    
    for(var key in title_obj){
       if(title_obj.hasOwnProperty(key)){
           var t = title_obj[key][0];
           var id = title_obj[key][1];
           li += '<li><a href="#'+ id +'">' + t + '</a></li>'
       }
   }
    $('#search-lists').children().remove();
    $('#search-lists').append(li);

};

jQuery.fn.removeHighlight = function() {
 function newNormalize(node) {
    for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
        var child = children[i];
        if (child.nodeType == 1) {
            newNormalize(child);
            continue;
        }
        if (child.nodeType != 3) { continue; }
        var next = child.nextSibling;
        if (next == null || next.nodeType != 3) { continue; }
        var combined_text = child.nodeValue + next.nodeValue;
        new_node = node.ownerDocument.createTextNode(combined_text);
        node.insertBefore(new_node, child);
        node.removeChild(child);
        node.removeChild(next);
        i--;
        nodeCount--;
    }
    $('#search-lists').children().remove();
 }

 return this.find("span.highlight").each(function() {
    var thisParent = this.parentNode;
    thisParent.replaceChild(this.firstChild, this);
    newNormalize(thisParent);
 }).end();
};
