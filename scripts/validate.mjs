import fs from 'node:fs';
import path from 'node:path';
const base=path.resolve('docs');
const courses=JSON.parse(fs.readFileSync(path.join(base,'data/courses.json'),'utf8'));
const exams=JSON.parse(fs.readFileSync(path.join(base,'data/exams.json'),'utf8'));
const categories=new Set(['freshman','sophomore','interdisciplinary','general']);
const types=new Set(['quiz','midterm','final','other']);
const seenCourses=new Set(),seenExams=new Set();
function assert(value,message){if(!value)throw Error(message)}
function text(value){return typeof value==='string'&&value.trim().length>0}
assert(Array.isArray(courses)&&Array.isArray(exams),'Data must be arrays');
for(const c of courses){assert(text(c.id)&&text(c.name)&&categories.has(c.category),'Invalid course');assert(!seenCourses.has(c.id),'Duplicate course ID: '+c.id);seenCourses.add(c.id)}
for(const e of exams){assert(text(e.id)&&!seenExams.has(e.id),'Invalid or duplicate exam ID');seenExams.add(e.id);assert(seenCourses.has(e.courseId),'Unknown course: '+e.courseId);assert(text(e.professor)&&text(e.title),'Missing professor/title');assert(Number.isInteger(e.year)&&e.year>=1&&e.year<=300,'Year must be a ROC academic year');assert(types.has(e.type),'Invalid exam type');assert(typeof e.hasAnswers==='boolean'&&typeof e.demo==='boolean','Flags must be booleans');assert(typeof e.file==='string'&&/^exams\/[A-Za-z0-9_./-]+\.pdf$/.test(e.file)&&!e.file.includes('..'),'Invalid PDF path');const file=path.resolve(base,e.file);assert(file.startsWith(base+path.sep),'PDF must remain inside docs');assert(fs.existsSync(file),'PDF not found: '+e.file);const buffer=fs.readFileSync(file);assert(buffer.subarray(0,5).toString()==='%PDF-','Not a PDF: '+e.file);assert(buffer.length<=10*1024*1024,'PDF exceeds 10 MB: '+e.file)}
console.log(`Validated ${courses.length} courses and ${exams.length} exam records.`);
