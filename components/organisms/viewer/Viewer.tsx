import { cx, css } from '@emotion/css';
import puppeteer from 'puppeteer';
import { useState } from 'react';

const Viewer = (props: any) => {
  // const [articleTitle, setArticleTitle] = useState('NowLoading...')
  const [html, setHtml] = useState('');
  const testUrl = 'https://zenn.dev/kazuki19992/articles/30510cd7754e0b';
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(testUrl);

    setHtml(await page.evaluate(() => document.documentElement.outerHTML));
    console.log(html);
  })();
  return <div className={cx('h-full', 'w-full', css({}))}></div>;
};

export default Viewer;
