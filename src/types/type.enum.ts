export enum DataType {
    Null,    // 0
    Any,     // 1
    Boolean, // 2
    Number,  // 3
    String,  // 4
    List,    // 5
    Dictionary, // 6
    Object,   // 7
    Class,    // 8
    Function, // 9
    Lambda,   // 10
    Range,    // 11
    RegExp,   // 12
    // internal types
    Void = 100, //  100
    Return,   // 101
    Break,    // 102
    Continue  // 103
}
