const db = require('../database/connect');
class Diary {
    constructor(diary) {
        this.diary = diary.diary_id
        this.date = diary.date
        this.time = diary.time
        this.text = diary.text
        this.category = diary.category
    }
}
