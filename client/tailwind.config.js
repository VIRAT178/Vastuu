export const content = ["./src/**/*.{js,jsx,ts,tsx,html}"];
export const theme = {
  extend: {
    fontSize:{
      'course-details-heading-small': ['26px','36px'],
      'course-details-heading-large': ['36px','46px'],
      'home-heading-small': ['28px','34px'],
      'home-heading-large': ['48px','56px'],
      'default' : ['15px','21px'],
    },
    gridTemplateColumns:{
      'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
    },
    spacing: {
      'h-section-height':'500px'
    },
    maxWidth: {
      'course-card': '424px',
    },
    boxShodow: {
      'custom-card':'0px 4px 15px 2px rgba(0,0,0,0.1)'
    }
  },
};
export const plugins = [];
