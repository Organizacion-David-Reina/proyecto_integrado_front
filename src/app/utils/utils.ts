export class Utils {
  static preventNumbers(event: KeyboardEvent): void {
    const isNumber = event.key >= '0' && event.key <= '9';
    if (isNumber) {
      event.preventDefault();
    }
  }

  static preventPasteNumbers(event: ClipboardEvent): void {
    const pastedText = event.clipboardData?.getData('text') || '';
    if (/\d/.test(pastedText)) {
      event.preventDefault();
    }
  }

  static preventLetters(event: KeyboardEvent): void {
    const allowedChars = [' ', '-', '+'];
    const isNumber = event.key >= '0' && event.key <= '9';
    const isAllowedChar = allowedChars.includes(event.key);
    const isControlKey = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'
    ].includes(event.key);

    if (!isNumber && !isAllowedChar && !isControlKey) {
      event.preventDefault();
    }
  }

  static preventPasteLetters(event: ClipboardEvent): void {
    const pastedText = event.clipboardData?.getData('text') || '';
    if (/[^0-9\s\-]/.test(pastedText)) {
      event.preventDefault();
    }
  }
}
