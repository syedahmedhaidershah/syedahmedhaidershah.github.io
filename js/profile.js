import { skills } from "./statics/skills.js";
import { exp as wp } from "./statics/exp.js";

class CV {
    buff = {
        skills: [],
        wp: []
    }

    constructor() { }

    init = () => {
        document.addEventListener('DOMContentLoaded', cv.proceed, true);
    }

    proceed = () => {
        cv.buff.skills = new Vue({
            el: '#skills-container',
            data: {
                skills
            }
        })
        cv.buff.wp = new Vue({
            el: '#wp-container',
            data: {
                wp
            }
        })
    }
}

const cv = new CV();
cv.init();