export class EnumClass {
  public static Keys(): Array<string> {
    return this.Members().map((x) => x.key);
  }

  public static Values(): Array<unknown> {
    return this.Members().map((x) => x.value);
  }

  public static Members(): Array<EnumClass> {
    return Object.values(this).filter((x) => x instanceof EnumClass);
  }

  public static GetKeyByValue(value: any): string | undefined {
    const member = this.Members().find((m) => m.value === value);
    if (member) return member.key;
    return undefined;
  }

  public readonly key: string;

  public readonly value: any;

  public constructor(key: string, value: unknown) {
    this.key = key;
    this.value = value;
  }

  public equal(enumClass: EnumClass) {
    return this.value === enumClass.value;
  }
}
