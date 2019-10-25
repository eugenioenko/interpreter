import { TokenType } from '../token';

export function isDigit(char: string): boolean {
    return char >= '0' && char <= '9';
}

export function isAlpha(char: string ): boolean {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

export function isAlphaNumeric(char: string): boolean {
    return isAlpha(char) || isDigit(char);
}

export function isKeyword(word: string): boolean {
    return TokenType[word] >= TokenType.And;
}
