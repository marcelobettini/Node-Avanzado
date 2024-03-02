export class CustomError extends Error {
  public constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message); //llamamos a la clase Error y le pasamos su param
  }
  static badRequest(message: string) {
    return new CustomError(400, message);
  }
  static unauthorized(message: string) {
    return new CustomError(401, message);
  }
  static forbidden(message: string) {
    return new CustomError(403, message);
  }
  static notFound(message: string) {
    return new CustomError(404, message);
  }
  static internalServerError(message: string = "Internal Server Error") {
    return new CustomError(500, message); //siempre debería regresar "ISE", por eso podemos ponerlo con default value y luego no pasarlo
  }
}
