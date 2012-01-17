var CertificationCallContext = function(course, metadata) {
    this.init = function(course, metadata) {
        Course.buildLinks(course);
        this.course = course;
        this.currentInteraction = course.children[0].children[0];
        this.metadata = metadata;
    };

    this.isAtCourseRoot = function() {
        return false;
    };

    this.isAtLesson = function() {
        return true;
    };

    this.currentInteractionLesson = function() {
        return this.findContentByName("lesson");
    };

    this.currentInteractionMenu = function() {
        return this.findContentByName("menu");
    };

    this.lessonFinished = function() {
        this.currentInteraction = this.currentInteraction.siblingOnRight;
    };

    this.findContentByName = function(contentName) {
        var contents = this.currentInteraction.contents
        var contentLength = contents.length
        for(i = 0; i< contentLength; i++){
            if(contents[i].name == contentName)
                return contents[i];
        }
        return undefined;
    };

    this.init(course, metadata);
};