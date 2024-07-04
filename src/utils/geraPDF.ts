// @ts-expect-error html2pdf não possui tipos
import html2pdf from 'html2pdf.js';
import { element } from './curriculo';


export const generatePDFContent = () => {
  const options = {
    margin: 1,
    filename: 'pedro-silva-CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    enableLinks: true,
    jsPDF: { 
      format: 'a4',
      putOnlyUsedFonts:true, 
      unit: 'mm',
      orientation: 'portrait' 
    },
  };
  html2pdf().set(options).from(element).save();
};