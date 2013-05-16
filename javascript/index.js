$(function(){
    
    function prepareInitialWorkSpace(){
    
    var editArea = $("#editArea");
    editArea.autosize();
    $("#title").focus();
    return editArea;
        
    }
    
    var editArea = prepareInitialWorkSpace();
    
    function hideThis(element){
        
        $(element).hide();
    }
    
    function getMarkdownText(){
        
        return editArea.val();
    }
    
    function getWordCount(text){
        
     return text.split(/\s+\b/).length;
    }
    
    function setHtmlinPreviewPane(markdownText){
        $("#wordCount").text('words: '+getWordCount(markdownText));
        $("#previewPane").html(markdown.toHTML(markdownText));
    }
    
    
    editArea.focusout(function(){
        
        setHtmlinPreviewPane(getMarkdownText());
        $("#previewContainer").show();
        hideThis(this);
    });
    
    $("#previewContainer").click(function(){
        
        hideThis(this);
        editArea.show();
        editArea.focus();
    });
}); 