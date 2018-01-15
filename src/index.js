#!/usr/bin/env node

import heml from 'heml'
import fs from 'fs-extra'
import path from 'path'
import mkdirp from 'mkdirp'

import elements from './elements'

const baseDir = process.cwd()
const sourceDir = `${baseDir}/src`
const distDir = `${baseDir}/dist`
const pjson = require(`${baseDir}/package.json`)
const source = `${sourceDir}/email.heml`
const content = fs.readFileSync(source, 'utf8');

const options = {
    validate: 'soft', // validation levels - 'strict'|'soft'|'none'
    cheerio: {}, // config passed to cheerio parser
    juice: {},
    beautify: {}, // config passed to js-beautify html method
    elements: elements
};

fs.removeSync(`${distDir}`)
mkdirp.sync(`${distDir}/html`)
mkdirp.sync(`${distDir}/assets`)

fs.copySync(path.resolve(__dirname,'../defaults/base.html.twig'), `${distDir}/html/base.html.twig`)
fs.copySync(path.resolve(__dirname,'../defaults/message.html.twig'), `${distDir}/html/message.html.twig`)

fs.readdir(`${sourceDir}`, (err, files) => {
    files.forEach(file => {
        if (file === 'email.heml') {
            return
        }

        try {
            fs.copySync(`${sourceDir}/${file}`, `${distDir}/${file}`)
        } catch (err) {
            console.error(err)
        }

    });
})

heml(content, options)
    .then(({ html, metadata, errors }) => {
        html = html.replace(/src="assets\/(?:[^"\/]*\/)*([^"]+)"/g, "src=\"{{ getAssetUrl('themes/'~template~'/assets/$1', null, null, true) }}\"")
        fs.writeFileSync(`${distDir}/html/email.html.twig`, html)
    })

fs.writeFileSync(`${distDir}//config.json`,  JSON.stringify({
    name: pjson.name || '',
    author: pjson.author || '',
    authorUrl: pjson.url || '',
    features: pjson.features || []
}))