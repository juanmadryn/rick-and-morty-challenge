interface ServiceInterface {
  findByChar(char: string):  Promise<any[]>;
}

export default ServiceInterface;
