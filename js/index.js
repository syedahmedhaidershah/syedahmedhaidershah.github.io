import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

import { skills } from "./statics/skills.js";

import { exp as wp } from "./statics/exp.js";


class CV {
    components = {
        workduration: null    
    };

    buff = {
        skills: [],
        wp: []
    }

    constructor() {
    }

    init = () => {
        document.addEventListener('DOMContentLoaded', cv.proceed, true);
    }

    proceed = () => {
        let useWp = wp.map((workExperience, index) => {
            return { ...workExperience, state: !index }
        });

        // this.buff.skills = new Vue({
        //     el: '#skills-container',
        //     data: {
        //         skills
        //     }
        // });

        this.buff.wp = new Vue({
            el: '#wp-container',
            data: {
                wp: useWp
            },
            components: this.components
        });

        this.setAttr();
    }

    setAttr = () => {
        
        this.setUpCompanyNames();
        
        this.setUpWorkExperienceCards();
        
        this.setupComponents();
    }

    setUpCompanyNames = () => {
        /** Setting up company names */
        const companyNames = Array.from(
            document.getElementsByClassName('company-name')
        );

        for (let companyName of companyNames) {

            const uri = companyName.getAttribute('attr');

            if (!uri)
                return false;

            companyName.onclick = this.openUriInNewTab.bind(null, uri);
        }
        /************************** */
    }

    setUpWorkExperienceCards = () => {
        /** Setting up work experience cards */
        const workCards = Array.from(
            document.getElementsByClassName('work-card')
        );

        for (let workCard of workCards) {
            workCard.onclick = ($e) => {
                const indexRetreived = workCard.getAttribute('index');

                this.buff.wp.$data.wp.forEach((wc, index) => {
                    if (+indexRetreived === +index) {
                        return wc.state = true;
                        // return toggleElement.classList.remove('h-0');
                    }

                    wc.state = false;
                    // return toggleElement.classList.add('h-0');
                })
            }
        }
        /************************** */
    }

    openUriInNewTab = (uri, $event) => {
        if (!uri)
            return false;

        window.open(uri, '_blank').focus();
    }

    setupComponents = () => {
        const workDurationElements = Array.from(
            document.getElementsByClassName('.work-duration')
        );

        for(elementIndex in workDurationElements) {
            
            var vm = new Vue({
                el: `#work-duration-${elementIndex}`,
            });

            Vue
                .component(
                    'workduration',
                    {
                        template: `
                            <h1>{{duration}}</h1
                        `,
                        props: {
                            duration: String
                        },
                        data() {
                            return {
                                message: 'hey'
                            }
                        }
                    },
                )

        }
    }
}

const cv = new CV();

cv.init();