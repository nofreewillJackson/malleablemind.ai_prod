// components/windowConfig.ts
export interface WindowContent {
    svgName: string;
    title: string;
}

export const windowConfigurations: { [buttonName: string]: WindowContent[] } = {
    button1: [
        { svgName: 'window1', title: 'Window 1' },
        { svgName: 'window1_2', title: 'Window 1 Tab 2' },
    ],
    button2: [
        { svgName: 'window2', title: 'Window 2' },
    ],
    button3: [
        { svgName: 'window3', title: 'Window 3' },
        { svgName: 'window3_2', title: 'Window 3 Tab 2' },
    ],
    button4: [
        { svgName: 'window4', title: 'Window 4' },
    ],
};
