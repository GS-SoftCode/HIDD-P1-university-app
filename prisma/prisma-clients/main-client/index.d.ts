
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Docente
 * 
 */
export type Docente = $Result.DefaultSelection<Prisma.$DocentePayload>
/**
 * Model Estudiante
 * 
 */
export type Estudiante = $Result.DefaultSelection<Prisma.$EstudiantePayload>
/**
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model Periodo
 * 
 */
export type Periodo = $Result.DefaultSelection<Prisma.$PeriodoPayload>
/**
 * Model Ciclo
 * 
 */
export type Ciclo = $Result.DefaultSelection<Prisma.$CicloPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Docente_Materia
 * 
 */
export type Docente_Materia = $Result.DefaultSelection<Prisma.$Docente_MateriaPayload>
/**
 * Model Estudiante_Materia
 * 
 */
export type Estudiante_Materia = $Result.DefaultSelection<Prisma.$Estudiante_MateriaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docente`: Exposes CRUD operations for the **Docente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Docentes
    * const docentes = await prisma.docente.findMany()
    * ```
    */
  get docente(): Prisma.DocenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudiante`: Exposes CRUD operations for the **Estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.EstudianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periodo`: Exposes CRUD operations for the **Periodo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periodos
    * const periodos = await prisma.periodo.findMany()
    * ```
    */
  get periodo(): Prisma.PeriodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ciclo`: Exposes CRUD operations for the **Ciclo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciclos
    * const ciclos = await prisma.ciclo.findMany()
    * ```
    */
  get ciclo(): Prisma.CicloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docente_Materia`: Exposes CRUD operations for the **Docente_Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Docente_Materias
    * const docente_Materias = await prisma.docente_Materia.findMany()
    * ```
    */
  get docente_Materia(): Prisma.Docente_MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudiante_Materia`: Exposes CRUD operations for the **Estudiante_Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiante_Materias
    * const estudiante_Materias = await prisma.estudiante_Materia.findMany()
    * ```
    */
  get estudiante_Materia(): Prisma.Estudiante_MateriaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Docente: 'Docente',
    Estudiante: 'Estudiante',
    Carrera: 'Carrera',
    Periodo: 'Periodo',
    Ciclo: 'Ciclo',
    Materia: 'Materia',
    Docente_Materia: 'Docente_Materia',
    Estudiante_Materia: 'Estudiante_Materia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "docente" | "estudiante" | "carrera" | "periodo" | "ciclo" | "materia" | "docente_Materia" | "estudiante_Materia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Docente: {
        payload: Prisma.$DocentePayload<ExtArgs>
        fields: Prisma.DocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findFirst: {
            args: Prisma.DocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findMany: {
            args: Prisma.DocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          create: {
            args: Prisma.DocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          createMany: {
            args: Prisma.DocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          delete: {
            args: Prisma.DocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          update: {
            args: Prisma.DocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          deleteMany: {
            args: Prisma.DocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          upsert: {
            args: Prisma.DocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          aggregate: {
            args: Prisma.DocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocente>
          }
          groupBy: {
            args: Prisma.DocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocenteCountArgs<ExtArgs>
            result: $Utils.Optional<DocenteCountAggregateOutputType> | number
          }
        }
      }
      Estudiante: {
        payload: Prisma.$EstudiantePayload<ExtArgs>
        fields: Prisma.EstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findFirst: {
            args: Prisma.EstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findMany: {
            args: Prisma.EstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          create: {
            args: Prisma.EstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          createMany: {
            args: Prisma.EstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          delete: {
            args: Prisma.EstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          update: {
            args: Prisma.EstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          deleteMany: {
            args: Prisma.EstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstudianteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          upsert: {
            args: Prisma.EstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.EstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarreraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      Periodo: {
        payload: Prisma.$PeriodoPayload<ExtArgs>
        fields: Prisma.PeriodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findFirst: {
            args: Prisma.PeriodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findMany: {
            args: Prisma.PeriodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          create: {
            args: Prisma.PeriodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          createMany: {
            args: Prisma.PeriodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          delete: {
            args: Prisma.PeriodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          update: {
            args: Prisma.PeriodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          deleteMany: {
            args: Prisma.PeriodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeriodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          upsert: {
            args: Prisma.PeriodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          aggregate: {
            args: Prisma.PeriodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodo>
          }
          groupBy: {
            args: Prisma.PeriodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodoCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodoCountAggregateOutputType> | number
          }
        }
      }
      Ciclo: {
        payload: Prisma.$CicloPayload<ExtArgs>
        fields: Prisma.CicloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CicloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CicloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          findFirst: {
            args: Prisma.CicloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CicloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          findMany: {
            args: Prisma.CicloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          create: {
            args: Prisma.CicloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          createMany: {
            args: Prisma.CicloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CicloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          delete: {
            args: Prisma.CicloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          update: {
            args: Prisma.CicloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          deleteMany: {
            args: Prisma.CicloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CicloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CicloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          upsert: {
            args: Prisma.CicloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          aggregate: {
            args: Prisma.CicloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiclo>
          }
          groupBy: {
            args: Prisma.CicloGroupByArgs<ExtArgs>
            result: $Utils.Optional<CicloGroupByOutputType>[]
          }
          count: {
            args: Prisma.CicloCountArgs<ExtArgs>
            result: $Utils.Optional<CicloCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Docente_Materia: {
        payload: Prisma.$Docente_MateriaPayload<ExtArgs>
        fields: Prisma.Docente_MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Docente_MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Docente_MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>
          }
          findFirst: {
            args: Prisma.Docente_MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Docente_MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>
          }
          findMany: {
            args: Prisma.Docente_MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>[]
          }
          create: {
            args: Prisma.Docente_MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>
          }
          createMany: {
            args: Prisma.Docente_MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Docente_MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>[]
          }
          delete: {
            args: Prisma.Docente_MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>
          }
          update: {
            args: Prisma.Docente_MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>
          }
          deleteMany: {
            args: Prisma.Docente_MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Docente_MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Docente_MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>[]
          }
          upsert: {
            args: Prisma.Docente_MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Docente_MateriaPayload>
          }
          aggregate: {
            args: Prisma.Docente_MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocente_Materia>
          }
          groupBy: {
            args: Prisma.Docente_MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Docente_MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Docente_MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<Docente_MateriaCountAggregateOutputType> | number
          }
        }
      }
      Estudiante_Materia: {
        payload: Prisma.$Estudiante_MateriaPayload<ExtArgs>
        fields: Prisma.Estudiante_MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Estudiante_MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Estudiante_MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>
          }
          findFirst: {
            args: Prisma.Estudiante_MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Estudiante_MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>
          }
          findMany: {
            args: Prisma.Estudiante_MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>[]
          }
          create: {
            args: Prisma.Estudiante_MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>
          }
          createMany: {
            args: Prisma.Estudiante_MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Estudiante_MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>[]
          }
          delete: {
            args: Prisma.Estudiante_MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>
          }
          update: {
            args: Prisma.Estudiante_MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>
          }
          deleteMany: {
            args: Prisma.Estudiante_MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Estudiante_MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Estudiante_MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>[]
          }
          upsert: {
            args: Prisma.Estudiante_MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estudiante_MateriaPayload>
          }
          aggregate: {
            args: Prisma.Estudiante_MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante_Materia>
          }
          groupBy: {
            args: Prisma.Estudiante_MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estudiante_MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Estudiante_MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<Estudiante_MateriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    docente?: DocenteOmit
    estudiante?: EstudianteOmit
    carrera?: CarreraOmit
    periodo?: PeriodoOmit
    ciclo?: CicloOmit
    materia?: MateriaOmit
    docente_Materia?: Docente_MateriaOmit
    estudiante_Materia?: Estudiante_MateriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocenteCountOutputType
   */

  export type DocenteCountOutputType = {
    materias: number
  }

  export type DocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | DocenteCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCountOutputType
     */
    select?: DocenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Docente_MateriaWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    materias: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | EstudianteCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Estudiante_MateriaWhereInput
  }


  /**
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    ciclos: number
    estudiantes: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclos?: boolean | CarreraCountOutputTypeCountCiclosArgs
    estudiantes?: boolean | CarreraCountOutputTypeCountEstudiantesArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountCiclosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CicloWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
  }


  /**
   * Count Type PeriodoCountOutputType
   */

  export type PeriodoCountOutputType = {
    docente_materias: number
    estudiante_materias: number
  }

  export type PeriodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente_materias?: boolean | PeriodoCountOutputTypeCountDocente_materiasArgs
    estudiante_materias?: boolean | PeriodoCountOutputTypeCountEstudiante_materiasArgs
  }

  // Custom InputTypes
  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodoCountOutputType
     */
    select?: PeriodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountDocente_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Docente_MateriaWhereInput
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountEstudiante_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Estudiante_MateriaWhereInput
  }


  /**
   * Count Type CicloCountOutputType
   */

  export type CicloCountOutputType = {
    materias: number
  }

  export type CicloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | CicloCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloCountOutputType
     */
    select?: CicloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    docentes: number
    estudiantes: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docentes?: boolean | MateriaCountOutputTypeCountDocentesArgs
    estudiantes?: boolean | MateriaCountOutputTypeCountEstudiantesArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountDocentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Docente_MateriaWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Estudiante_MateriaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id_admin: number | null
    userId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id_admin: number | null
    userId: number | null
  }

  export type AdminMinAggregateOutputType = {
    id_admin: number | null
    userId: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id_admin: number | null
    userId: number | null
  }

  export type AdminCountAggregateOutputType = {
    id_admin: number
    userId: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id_admin?: true
    userId?: true
  }

  export type AdminSumAggregateInputType = {
    id_admin?: true
    userId?: true
  }

  export type AdminMinAggregateInputType = {
    id_admin?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id_admin?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id_admin?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id_admin: number
    userId: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    userId?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    userId?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    userId?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id_admin?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_admin" | "userId", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_admin: number
      userId: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id_admin`
     * const adminWithId_adminOnly = await prisma.admin.findMany({ select: { id_admin: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id_admin`
     * const adminWithId_adminOnly = await prisma.admin.createManyAndReturn({
     *   select: { id_admin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id_admin`
     * const adminWithId_adminOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id_admin: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id_admin: FieldRef<"Admin", 'Int'>
    readonly userId: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Docente
   */

  export type AggregateDocente = {
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  export type DocenteAvgAggregateOutputType = {
    id_docente: number | null
    userId: number | null
  }

  export type DocenteSumAggregateOutputType = {
    id_docente: number | null
    userId: number | null
  }

  export type DocenteMinAggregateOutputType = {
    id_docente: number | null
    userId: number | null
    especialidad: string | null
  }

  export type DocenteMaxAggregateOutputType = {
    id_docente: number | null
    userId: number | null
    especialidad: string | null
  }

  export type DocenteCountAggregateOutputType = {
    id_docente: number
    userId: number
    especialidad: number
    _all: number
  }


  export type DocenteAvgAggregateInputType = {
    id_docente?: true
    userId?: true
  }

  export type DocenteSumAggregateInputType = {
    id_docente?: true
    userId?: true
  }

  export type DocenteMinAggregateInputType = {
    id_docente?: true
    userId?: true
    especialidad?: true
  }

  export type DocenteMaxAggregateInputType = {
    id_docente?: true
    userId?: true
    especialidad?: true
  }

  export type DocenteCountAggregateInputType = {
    id_docente?: true
    userId?: true
    especialidad?: true
    _all?: true
  }

  export type DocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente to aggregate.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Docentes
    **/
    _count?: true | DocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocenteMaxAggregateInputType
  }

  export type GetDocenteAggregateType<T extends DocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocente[P]>
      : GetScalarType<T[P], AggregateDocente[P]>
  }




  export type DocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteWhereInput
    orderBy?: DocenteOrderByWithAggregationInput | DocenteOrderByWithAggregationInput[]
    by: DocenteScalarFieldEnum[] | DocenteScalarFieldEnum
    having?: DocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocenteCountAggregateInputType | true
    _avg?: DocenteAvgAggregateInputType
    _sum?: DocenteSumAggregateInputType
    _min?: DocenteMinAggregateInputType
    _max?: DocenteMaxAggregateInputType
  }

  export type DocenteGroupByOutputType = {
    id_docente: number
    userId: number
    especialidad: string
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  type GetDocenteGroupByPayload<T extends DocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocenteGroupByOutputType[P]>
            : GetScalarType<T[P], DocenteGroupByOutputType[P]>
        }
      >
    >


  export type DocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_docente?: boolean
    userId?: boolean
    especialidad?: boolean
    materias?: boolean | Docente$materiasArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_docente?: boolean
    userId?: boolean
    especialidad?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_docente?: boolean
    userId?: boolean
    especialidad?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectScalar = {
    id_docente?: boolean
    userId?: boolean
    especialidad?: boolean
  }

  export type DocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_docente" | "userId" | "especialidad", ExtArgs["result"]["docente"]>
  export type DocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | Docente$materiasArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Docente"
    objects: {
      materias: Prisma.$Docente_MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_docente: number
      userId: number
      especialidad: string
    }, ExtArgs["result"]["docente"]>
    composites: {}
  }

  type DocenteGetPayload<S extends boolean | null | undefined | DocenteDefaultArgs> = $Result.GetResult<Prisma.$DocentePayload, S>

  type DocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocenteCountAggregateInputType | true
    }

  export interface DocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Docente'], meta: { name: 'Docente' } }
    /**
     * Find zero or one Docente that matches the filter.
     * @param {DocenteFindUniqueArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocenteFindUniqueArgs>(args: SelectSubset<T, DocenteFindUniqueArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Docente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocenteFindUniqueOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, DocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocenteFindFirstArgs>(args?: SelectSubset<T, DocenteFindFirstArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, DocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Docentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Docentes
     * const docentes = await prisma.docente.findMany()
     * 
     * // Get first 10 Docentes
     * const docentes = await prisma.docente.findMany({ take: 10 })
     * 
     * // Only select the `id_docente`
     * const docenteWithId_docenteOnly = await prisma.docente.findMany({ select: { id_docente: true } })
     * 
     */
    findMany<T extends DocenteFindManyArgs>(args?: SelectSubset<T, DocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Docente.
     * @param {DocenteCreateArgs} args - Arguments to create a Docente.
     * @example
     * // Create one Docente
     * const Docente = await prisma.docente.create({
     *   data: {
     *     // ... data to create a Docente
     *   }
     * })
     * 
     */
    create<T extends DocenteCreateArgs>(args: SelectSubset<T, DocenteCreateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Docentes.
     * @param {DocenteCreateManyArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocenteCreateManyArgs>(args?: SelectSubset<T, DocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Docentes and returns the data saved in the database.
     * @param {DocenteCreateManyAndReturnArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Docentes and only return the `id_docente`
     * const docenteWithId_docenteOnly = await prisma.docente.createManyAndReturn({
     *   select: { id_docente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, DocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Docente.
     * @param {DocenteDeleteArgs} args - Arguments to delete one Docente.
     * @example
     * // Delete one Docente
     * const Docente = await prisma.docente.delete({
     *   where: {
     *     // ... filter to delete one Docente
     *   }
     * })
     * 
     */
    delete<T extends DocenteDeleteArgs>(args: SelectSubset<T, DocenteDeleteArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Docente.
     * @param {DocenteUpdateArgs} args - Arguments to update one Docente.
     * @example
     * // Update one Docente
     * const docente = await prisma.docente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocenteUpdateArgs>(args: SelectSubset<T, DocenteUpdateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Docentes.
     * @param {DocenteDeleteManyArgs} args - Arguments to filter Docentes to delete.
     * @example
     * // Delete a few Docentes
     * const { count } = await prisma.docente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocenteDeleteManyArgs>(args?: SelectSubset<T, DocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocenteUpdateManyArgs>(args: SelectSubset<T, DocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes and returns the data updated in the database.
     * @param {DocenteUpdateManyAndReturnArgs} args - Arguments to update many Docentes.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Docentes and only return the `id_docente`
     * const docenteWithId_docenteOnly = await prisma.docente.updateManyAndReturn({
     *   select: { id_docente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, DocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Docente.
     * @param {DocenteUpsertArgs} args - Arguments to update or create a Docente.
     * @example
     * // Update or create a Docente
     * const docente = await prisma.docente.upsert({
     *   create: {
     *     // ... data to create a Docente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Docente we want to update
     *   }
     * })
     */
    upsert<T extends DocenteUpsertArgs>(args: SelectSubset<T, DocenteUpsertArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCountArgs} args - Arguments to filter Docentes to count.
     * @example
     * // Count the number of Docentes
     * const count = await prisma.docente.count({
     *   where: {
     *     // ... the filter for the Docentes we want to count
     *   }
     * })
    **/
    count<T extends DocenteCountArgs>(
      args?: Subset<T, DocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocenteAggregateArgs>(args: Subset<T, DocenteAggregateArgs>): Prisma.PrismaPromise<GetDocenteAggregateType<T>>

    /**
     * Group by Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocenteGroupByArgs['orderBy'] }
        : { orderBy?: DocenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Docente model
   */
  readonly fields: DocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Docente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends Docente$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Docente$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Docente model
   */
  interface DocenteFieldRefs {
    readonly id_docente: FieldRef<"Docente", 'Int'>
    readonly userId: FieldRef<"Docente", 'Int'>
    readonly especialidad: FieldRef<"Docente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Docente findUnique
   */
  export type DocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findUniqueOrThrow
   */
  export type DocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findFirst
   */
  export type DocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findFirstOrThrow
   */
  export type DocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findMany
   */
  export type DocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docentes to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente create
   */
  export type DocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Docente.
     */
    data: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
  }

  /**
   * Docente createMany
   */
  export type DocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente createManyAndReturn
   */
  export type DocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente update
   */
  export type DocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Docente.
     */
    data: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
    /**
     * Choose, which Docente to update.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente updateMany
   */
  export type DocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente updateManyAndReturn
   */
  export type DocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente upsert
   */
  export type DocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Docente to update in case it exists.
     */
    where: DocenteWhereUniqueInput
    /**
     * In case the Docente found by the `where` argument doesn't exist, create a new Docente with this data.
     */
    create: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
    /**
     * In case the Docente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
  }

  /**
   * Docente delete
   */
  export type DocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter which Docente to delete.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente deleteMany
   */
  export type DocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docentes to delete
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to delete.
     */
    limit?: number
  }

  /**
   * Docente.materias
   */
  export type Docente$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    where?: Docente_MateriaWhereInput
    orderBy?: Docente_MateriaOrderByWithRelationInput | Docente_MateriaOrderByWithRelationInput[]
    cursor?: Docente_MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Docente_MateriaScalarFieldEnum | Docente_MateriaScalarFieldEnum[]
  }

  /**
   * Docente without action
   */
  export type DocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
  }


  /**
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    id_estudiante: number | null
    userId: number | null
    id_carrera: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    id_estudiante: number | null
    userId: number | null
    id_carrera: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    id_estudiante: number | null
    userId: number | null
    fecha_nacimiento: Date | null
    id_carrera: number | null
    estado: string | null
  }

  export type EstudianteMaxAggregateOutputType = {
    id_estudiante: number | null
    userId: number | null
    fecha_nacimiento: Date | null
    id_carrera: number | null
    estado: string | null
  }

  export type EstudianteCountAggregateOutputType = {
    id_estudiante: number
    userId: number
    fecha_nacimiento: number
    id_carrera: number
    estado: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    id_estudiante?: true
    userId?: true
    id_carrera?: true
  }

  export type EstudianteSumAggregateInputType = {
    id_estudiante?: true
    userId?: true
    id_carrera?: true
  }

  export type EstudianteMinAggregateInputType = {
    id_estudiante?: true
    userId?: true
    fecha_nacimiento?: true
    id_carrera?: true
    estado?: true
  }

  export type EstudianteMaxAggregateInputType = {
    id_estudiante?: true
    userId?: true
    fecha_nacimiento?: true
    id_carrera?: true
    estado?: true
  }

  export type EstudianteCountAggregateInputType = {
    id_estudiante?: true
    userId?: true
    fecha_nacimiento?: true
    id_carrera?: true
    estado?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante to aggregate.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type EstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithAggregationInput | EstudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: EstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    id_estudiante: number
    userId: number
    fecha_nacimiento: Date
    id_carrera: number
    estado: string
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends EstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    userId?: boolean
    fecha_nacimiento?: boolean
    id_carrera?: boolean
    estado?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materias?: boolean | Estudiante$materiasArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    userId?: boolean
    fecha_nacimiento?: boolean
    id_carrera?: boolean
    estado?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    userId?: boolean
    fecha_nacimiento?: boolean
    id_carrera?: boolean
    estado?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectScalar = {
    id_estudiante?: boolean
    userId?: boolean
    fecha_nacimiento?: boolean
    id_carrera?: boolean
    estado?: boolean
  }

  export type EstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estudiante" | "userId" | "fecha_nacimiento" | "id_carrera" | "estado", ExtArgs["result"]["estudiante"]>
  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materias?: boolean | Estudiante$materiasArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      materias: Prisma.$Estudiante_MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estudiante: number
      userId: number
      fecha_nacimiento: Date
      id_carrera: number
      estado: string
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type EstudianteGetPayload<S extends boolean | null | undefined | EstudianteDefaultArgs> = $Result.GetResult<Prisma.$EstudiantePayload, S>

  type EstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface EstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante'], meta: { name: 'Estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {EstudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteFindUniqueArgs>(args: SelectSubset<T, EstudianteFindUniqueArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteFindFirstArgs>(args?: SelectSubset<T, EstudianteFindFirstArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `id_estudiante`
     * const estudianteWithId_estudianteOnly = await prisma.estudiante.findMany({ select: { id_estudiante: true } })
     * 
     */
    findMany<T extends EstudianteFindManyArgs>(args?: SelectSubset<T, EstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante.
     * @param {EstudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends EstudianteCreateArgs>(args: SelectSubset<T, EstudianteCreateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiantes.
     * @param {EstudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteCreateManyArgs>(args?: SelectSubset<T, EstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudiantes and returns the data saved in the database.
     * @param {EstudianteCreateManyAndReturnArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudiantes and only return the `id_estudiante`
     * const estudianteWithId_estudianteOnly = await prisma.estudiante.createManyAndReturn({
     *   select: { id_estudiante: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudianteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estudiante.
     * @param {EstudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends EstudianteDeleteArgs>(args: SelectSubset<T, EstudianteDeleteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante.
     * @param {EstudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteUpdateArgs>(args: SelectSubset<T, EstudianteUpdateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteDeleteManyArgs>(args?: SelectSubset<T, EstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteUpdateManyArgs>(args: SelectSubset<T, EstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes and returns the data updated in the database.
     * @param {EstudianteUpdateManyAndReturnArgs} args - Arguments to update many Estudiantes.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estudiantes and only return the `id_estudiante`
     * const estudianteWithId_estudianteOnly = await prisma.estudiante.updateManyAndReturn({
     *   select: { id_estudiante: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstudianteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstudianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estudiante.
     * @param {EstudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteUpsertArgs>(args: SelectSubset<T, EstudianteUpsertArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudianteCountArgs>(
      args?: Subset<T, EstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante model
   */
  readonly fields: EstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materias<T extends Estudiante$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estudiante model
   */
  interface EstudianteFieldRefs {
    readonly id_estudiante: FieldRef<"Estudiante", 'Int'>
    readonly userId: FieldRef<"Estudiante", 'Int'>
    readonly fecha_nacimiento: FieldRef<"Estudiante", 'DateTime'>
    readonly id_carrera: FieldRef<"Estudiante", 'Int'>
    readonly estado: FieldRef<"Estudiante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante findUnique
   */
  export type EstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findUniqueOrThrow
   */
  export type EstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findFirst
   */
  export type EstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findFirstOrThrow
   */
  export type EstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findMany
   */
  export type EstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante create
   */
  export type EstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante.
     */
    data: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
  }

  /**
   * Estudiante createMany
   */
  export type EstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante createManyAndReturn
   */
  export type EstudianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante update
   */
  export type EstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante.
     */
    data: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
    /**
     * Choose, which Estudiante to update.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante updateMany
   */
  export type EstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante updateManyAndReturn
   */
  export type EstudianteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante upsert
   */
  export type EstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante to update in case it exists.
     */
    where: EstudianteWhereUniqueInput
    /**
     * In case the Estudiante found by the `where` argument doesn't exist, create a new Estudiante with this data.
     */
    create: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
    /**
     * In case the Estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
  }

  /**
   * Estudiante delete
   */
  export type EstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter which Estudiante to delete.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante deleteMany
   */
  export type EstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to delete.
     */
    limit?: number
  }

  /**
   * Estudiante.materias
   */
  export type Estudiante$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    where?: Estudiante_MateriaWhereInput
    orderBy?: Estudiante_MateriaOrderByWithRelationInput | Estudiante_MateriaOrderByWithRelationInput[]
    cursor?: Estudiante_MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Estudiante_MateriaScalarFieldEnum | Estudiante_MateriaScalarFieldEnum[]
  }

  /**
   * Estudiante without action
   */
  export type EstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
  }


  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id_carrera: number | null
    duracion: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id_carrera: number | null
    duracion: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id_carrera: number | null
    nombre: string | null
    duracion: number | null
    facultad: string | null
  }

  export type CarreraMaxAggregateOutputType = {
    id_carrera: number | null
    nombre: string | null
    duracion: number | null
    facultad: string | null
  }

  export type CarreraCountAggregateOutputType = {
    id_carrera: number
    nombre: number
    duracion: number
    facultad: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id_carrera?: true
    duracion?: true
  }

  export type CarreraSumAggregateInputType = {
    id_carrera?: true
    duracion?: true
  }

  export type CarreraMinAggregateInputType = {
    id_carrera?: true
    nombre?: true
    duracion?: true
    facultad?: true
  }

  export type CarreraMaxAggregateInputType = {
    id_carrera?: true
    nombre?: true
    duracion?: true
    facultad?: true
  }

  export type CarreraCountAggregateInputType = {
    id_carrera?: true
    nombre?: true
    duracion?: true
    facultad?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id_carrera: number
    nombre: string
    duracion: number
    facultad: string
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    facultad?: boolean
    ciclos?: boolean | Carrera$ciclosArgs<ExtArgs>
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    facultad?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    facultad?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectScalar = {
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    facultad?: boolean
  }

  export type CarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_carrera" | "nombre" | "duracion" | "facultad", ExtArgs["result"]["carrera"]>
  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclos?: boolean | Carrera$ciclosArgs<ExtArgs>
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarreraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      ciclos: Prisma.$CicloPayload<ExtArgs>[]
      estudiantes: Prisma.$EstudiantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_carrera: number
      nombre: string
      duracion: number
      facultad: string
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id_carrera`
     * const carreraWithId_carreraOnly = await prisma.carrera.findMany({ select: { id_carrera: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreras and returns the data saved in the database.
     * @param {CarreraCreateManyAndReturnArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreras and only return the `id_carrera`
     * const carreraWithId_carreraOnly = await prisma.carrera.createManyAndReturn({
     *   select: { id_carrera: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras and returns the data updated in the database.
     * @param {CarreraUpdateManyAndReturnArgs} args - Arguments to update many Carreras.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carreras and only return the `id_carrera`
     * const carreraWithId_carreraOnly = await prisma.carrera.updateManyAndReturn({
     *   select: { id_carrera: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarreraUpdateManyAndReturnArgs>(args: SelectSubset<T, CarreraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciclos<T extends Carrera$ciclosArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$ciclosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estudiantes<T extends Carrera$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrera model
   */
  interface CarreraFieldRefs {
    readonly id_carrera: FieldRef<"Carrera", 'Int'>
    readonly nombre: FieldRef<"Carrera", 'String'>
    readonly duracion: FieldRef<"Carrera", 'Int'>
    readonly facultad: FieldRef<"Carrera", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera createManyAndReturn
   */
  export type CarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera updateManyAndReturn
   */
  export type CarreraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to delete.
     */
    limit?: number
  }

  /**
   * Carrera.ciclos
   */
  export type Carrera$ciclosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    where?: CicloWhereInput
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    cursor?: CicloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Carrera.estudiantes
   */
  export type Carrera$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    cursor?: EstudianteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model Periodo
   */

  export type AggregatePeriodo = {
    _count: PeriodoCountAggregateOutputType | null
    _avg: PeriodoAvgAggregateOutputType | null
    _sum: PeriodoSumAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  export type PeriodoAvgAggregateOutputType = {
    id_periodo: number | null
  }

  export type PeriodoSumAggregateOutputType = {
    id_periodo: number | null
  }

  export type PeriodoMinAggregateOutputType = {
    id_periodo: number | null
    nombre: string | null
    activo: boolean | null
  }

  export type PeriodoMaxAggregateOutputType = {
    id_periodo: number | null
    nombre: string | null
    activo: boolean | null
  }

  export type PeriodoCountAggregateOutputType = {
    id_periodo: number
    nombre: number
    activo: number
    _all: number
  }


  export type PeriodoAvgAggregateInputType = {
    id_periodo?: true
  }

  export type PeriodoSumAggregateInputType = {
    id_periodo?: true
  }

  export type PeriodoMinAggregateInputType = {
    id_periodo?: true
    nombre?: true
    activo?: true
  }

  export type PeriodoMaxAggregateInputType = {
    id_periodo?: true
    nombre?: true
    activo?: true
  }

  export type PeriodoCountAggregateInputType = {
    id_periodo?: true
    nombre?: true
    activo?: true
    _all?: true
  }

  export type PeriodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodo to aggregate.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Periodos
    **/
    _count?: true | PeriodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodoMaxAggregateInputType
  }

  export type GetPeriodoAggregateType<T extends PeriodoAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodo[P]>
      : GetScalarType<T[P], AggregatePeriodo[P]>
  }




  export type PeriodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodoWhereInput
    orderBy?: PeriodoOrderByWithAggregationInput | PeriodoOrderByWithAggregationInput[]
    by: PeriodoScalarFieldEnum[] | PeriodoScalarFieldEnum
    having?: PeriodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodoCountAggregateInputType | true
    _avg?: PeriodoAvgAggregateInputType
    _sum?: PeriodoSumAggregateInputType
    _min?: PeriodoMinAggregateInputType
    _max?: PeriodoMaxAggregateInputType
  }

  export type PeriodoGroupByOutputType = {
    id_periodo: number
    nombre: string
    activo: boolean
    _count: PeriodoCountAggregateOutputType | null
    _avg: PeriodoAvgAggregateOutputType | null
    _sum: PeriodoSumAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  type GetPeriodoGroupByPayload<T extends PeriodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
        }
      >
    >


  export type PeriodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodo?: boolean
    nombre?: boolean
    activo?: boolean
    docente_materias?: boolean | Periodo$docente_materiasArgs<ExtArgs>
    estudiante_materias?: boolean | Periodo$estudiante_materiasArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodo?: boolean
    nombre?: boolean
    activo?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodo?: boolean
    nombre?: boolean
    activo?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectScalar = {
    id_periodo?: boolean
    nombre?: boolean
    activo?: boolean
  }

  export type PeriodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_periodo" | "nombre" | "activo", ExtArgs["result"]["periodo"]>
  export type PeriodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente_materias?: boolean | Periodo$docente_materiasArgs<ExtArgs>
    estudiante_materias?: boolean | Periodo$estudiante_materiasArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeriodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeriodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Periodo"
    objects: {
      docente_materias: Prisma.$Docente_MateriaPayload<ExtArgs>[]
      estudiante_materias: Prisma.$Estudiante_MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_periodo: number
      nombre: string
      activo: boolean
    }, ExtArgs["result"]["periodo"]>
    composites: {}
  }

  type PeriodoGetPayload<S extends boolean | null | undefined | PeriodoDefaultArgs> = $Result.GetResult<Prisma.$PeriodoPayload, S>

  type PeriodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodoCountAggregateInputType | true
    }

  export interface PeriodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Periodo'], meta: { name: 'Periodo' } }
    /**
     * Find zero or one Periodo that matches the filter.
     * @param {PeriodoFindUniqueArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodoFindUniqueArgs>(args: SelectSubset<T, PeriodoFindUniqueArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Periodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriodoFindUniqueOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodoFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodoFindFirstArgs>(args?: SelectSubset<T, PeriodoFindFirstArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodoFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Periodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodos
     * const periodos = await prisma.periodo.findMany()
     * 
     * // Get first 10 Periodos
     * const periodos = await prisma.periodo.findMany({ take: 10 })
     * 
     * // Only select the `id_periodo`
     * const periodoWithId_periodoOnly = await prisma.periodo.findMany({ select: { id_periodo: true } })
     * 
     */
    findMany<T extends PeriodoFindManyArgs>(args?: SelectSubset<T, PeriodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Periodo.
     * @param {PeriodoCreateArgs} args - Arguments to create a Periodo.
     * @example
     * // Create one Periodo
     * const Periodo = await prisma.periodo.create({
     *   data: {
     *     // ... data to create a Periodo
     *   }
     * })
     * 
     */
    create<T extends PeriodoCreateArgs>(args: SelectSubset<T, PeriodoCreateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Periodos.
     * @param {PeriodoCreateManyArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodoCreateManyArgs>(args?: SelectSubset<T, PeriodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Periodos and returns the data saved in the database.
     * @param {PeriodoCreateManyAndReturnArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Periodos and only return the `id_periodo`
     * const periodoWithId_periodoOnly = await prisma.periodo.createManyAndReturn({
     *   select: { id_periodo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodoCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Periodo.
     * @param {PeriodoDeleteArgs} args - Arguments to delete one Periodo.
     * @example
     * // Delete one Periodo
     * const Periodo = await prisma.periodo.delete({
     *   where: {
     *     // ... filter to delete one Periodo
     *   }
     * })
     * 
     */
    delete<T extends PeriodoDeleteArgs>(args: SelectSubset<T, PeriodoDeleteArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Periodo.
     * @param {PeriodoUpdateArgs} args - Arguments to update one Periodo.
     * @example
     * // Update one Periodo
     * const periodo = await prisma.periodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodoUpdateArgs>(args: SelectSubset<T, PeriodoUpdateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Periodos.
     * @param {PeriodoDeleteManyArgs} args - Arguments to filter Periodos to delete.
     * @example
     * // Delete a few Periodos
     * const { count } = await prisma.periodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodoDeleteManyArgs>(args?: SelectSubset<T, PeriodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodoUpdateManyArgs>(args: SelectSubset<T, PeriodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos and returns the data updated in the database.
     * @param {PeriodoUpdateManyAndReturnArgs} args - Arguments to update many Periodos.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Periodos and only return the `id_periodo`
     * const periodoWithId_periodoOnly = await prisma.periodo.updateManyAndReturn({
     *   select: { id_periodo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeriodoUpdateManyAndReturnArgs>(args: SelectSubset<T, PeriodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Periodo.
     * @param {PeriodoUpsertArgs} args - Arguments to update or create a Periodo.
     * @example
     * // Update or create a Periodo
     * const periodo = await prisma.periodo.upsert({
     *   create: {
     *     // ... data to create a Periodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periodo we want to update
     *   }
     * })
     */
    upsert<T extends PeriodoUpsertArgs>(args: SelectSubset<T, PeriodoUpsertArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoCountArgs} args - Arguments to filter Periodos to count.
     * @example
     * // Count the number of Periodos
     * const count = await prisma.periodo.count({
     *   where: {
     *     // ... the filter for the Periodos we want to count
     *   }
     * })
    **/
    count<T extends PeriodoCountArgs>(
      args?: Subset<T, PeriodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriodoAggregateArgs>(args: Subset<T, PeriodoAggregateArgs>): Prisma.PrismaPromise<GetPeriodoAggregateType<T>>

    /**
     * Group by Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeriodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodoGroupByArgs['orderBy'] }
        : { orderBy?: PeriodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeriodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Periodo model
   */
  readonly fields: PeriodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Periodo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docente_materias<T extends Periodo$docente_materiasArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$docente_materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estudiante_materias<T extends Periodo$estudiante_materiasArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$estudiante_materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Periodo model
   */
  interface PeriodoFieldRefs {
    readonly id_periodo: FieldRef<"Periodo", 'Int'>
    readonly nombre: FieldRef<"Periodo", 'String'>
    readonly activo: FieldRef<"Periodo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Periodo findUnique
   */
  export type PeriodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findUniqueOrThrow
   */
  export type PeriodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findFirst
   */
  export type PeriodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findFirstOrThrow
   */
  export type PeriodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findMany
   */
  export type PeriodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodos to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo create
   */
  export type PeriodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Periodo.
     */
    data: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
  }

  /**
   * Periodo createMany
   */
  export type PeriodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo createManyAndReturn
   */
  export type PeriodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo update
   */
  export type PeriodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Periodo.
     */
    data: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
    /**
     * Choose, which Periodo to update.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo updateMany
   */
  export type PeriodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo updateManyAndReturn
   */
  export type PeriodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo upsert
   */
  export type PeriodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Periodo to update in case it exists.
     */
    where: PeriodoWhereUniqueInput
    /**
     * In case the Periodo found by the `where` argument doesn't exist, create a new Periodo with this data.
     */
    create: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
    /**
     * In case the Periodo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
  }

  /**
   * Periodo delete
   */
  export type PeriodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter which Periodo to delete.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo deleteMany
   */
  export type PeriodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodos to delete
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to delete.
     */
    limit?: number
  }

  /**
   * Periodo.docente_materias
   */
  export type Periodo$docente_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    where?: Docente_MateriaWhereInput
    orderBy?: Docente_MateriaOrderByWithRelationInput | Docente_MateriaOrderByWithRelationInput[]
    cursor?: Docente_MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Docente_MateriaScalarFieldEnum | Docente_MateriaScalarFieldEnum[]
  }

  /**
   * Periodo.estudiante_materias
   */
  export type Periodo$estudiante_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    where?: Estudiante_MateriaWhereInput
    orderBy?: Estudiante_MateriaOrderByWithRelationInput | Estudiante_MateriaOrderByWithRelationInput[]
    cursor?: Estudiante_MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Estudiante_MateriaScalarFieldEnum | Estudiante_MateriaScalarFieldEnum[]
  }

  /**
   * Periodo without action
   */
  export type PeriodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
  }


  /**
   * Model Ciclo
   */

  export type AggregateCiclo = {
    _count: CicloCountAggregateOutputType | null
    _avg: CicloAvgAggregateOutputType | null
    _sum: CicloSumAggregateOutputType | null
    _min: CicloMinAggregateOutputType | null
    _max: CicloMaxAggregateOutputType | null
  }

  export type CicloAvgAggregateOutputType = {
    id_ciclo: number | null
    numero: number | null
    id_carrera: number | null
  }

  export type CicloSumAggregateOutputType = {
    id_ciclo: number | null
    numero: number | null
    id_carrera: number | null
  }

  export type CicloMinAggregateOutputType = {
    id_ciclo: number | null
    nombre: string | null
    numero: number | null
    id_carrera: number | null
  }

  export type CicloMaxAggregateOutputType = {
    id_ciclo: number | null
    nombre: string | null
    numero: number | null
    id_carrera: number | null
  }

  export type CicloCountAggregateOutputType = {
    id_ciclo: number
    nombre: number
    numero: number
    id_carrera: number
    _all: number
  }


  export type CicloAvgAggregateInputType = {
    id_ciclo?: true
    numero?: true
    id_carrera?: true
  }

  export type CicloSumAggregateInputType = {
    id_ciclo?: true
    numero?: true
    id_carrera?: true
  }

  export type CicloMinAggregateInputType = {
    id_ciclo?: true
    nombre?: true
    numero?: true
    id_carrera?: true
  }

  export type CicloMaxAggregateInputType = {
    id_ciclo?: true
    nombre?: true
    numero?: true
    id_carrera?: true
  }

  export type CicloCountAggregateInputType = {
    id_ciclo?: true
    nombre?: true
    numero?: true
    id_carrera?: true
    _all?: true
  }

  export type CicloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciclo to aggregate.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciclos
    **/
    _count?: true | CicloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CicloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CicloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CicloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CicloMaxAggregateInputType
  }

  export type GetCicloAggregateType<T extends CicloAggregateArgs> = {
        [P in keyof T & keyof AggregateCiclo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiclo[P]>
      : GetScalarType<T[P], AggregateCiclo[P]>
  }




  export type CicloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CicloWhereInput
    orderBy?: CicloOrderByWithAggregationInput | CicloOrderByWithAggregationInput[]
    by: CicloScalarFieldEnum[] | CicloScalarFieldEnum
    having?: CicloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CicloCountAggregateInputType | true
    _avg?: CicloAvgAggregateInputType
    _sum?: CicloSumAggregateInputType
    _min?: CicloMinAggregateInputType
    _max?: CicloMaxAggregateInputType
  }

  export type CicloGroupByOutputType = {
    id_ciclo: number
    nombre: string
    numero: number
    id_carrera: number
    _count: CicloCountAggregateOutputType | null
    _avg: CicloAvgAggregateOutputType | null
    _sum: CicloSumAggregateOutputType | null
    _min: CicloMinAggregateOutputType | null
    _max: CicloMaxAggregateOutputType | null
  }

  type GetCicloGroupByPayload<T extends CicloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CicloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CicloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CicloGroupByOutputType[P]>
            : GetScalarType<T[P], CicloGroupByOutputType[P]>
        }
      >
    >


  export type CicloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ciclo?: boolean
    nombre?: boolean
    numero?: boolean
    id_carrera?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materias?: boolean | Ciclo$materiasArgs<ExtArgs>
    _count?: boolean | CicloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ciclo?: boolean
    nombre?: boolean
    numero?: boolean
    id_carrera?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ciclo?: boolean
    nombre?: boolean
    numero?: boolean
    id_carrera?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectScalar = {
    id_ciclo?: boolean
    nombre?: boolean
    numero?: boolean
    id_carrera?: boolean
  }

  export type CicloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ciclo" | "nombre" | "numero" | "id_carrera", ExtArgs["result"]["ciclo"]>
  export type CicloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materias?: boolean | Ciclo$materiasArgs<ExtArgs>
    _count?: boolean | CicloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CicloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type CicloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $CicloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciclo"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      materias: Prisma.$MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ciclo: number
      nombre: string
      numero: number
      id_carrera: number
    }, ExtArgs["result"]["ciclo"]>
    composites: {}
  }

  type CicloGetPayload<S extends boolean | null | undefined | CicloDefaultArgs> = $Result.GetResult<Prisma.$CicloPayload, S>

  type CicloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CicloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CicloCountAggregateInputType | true
    }

  export interface CicloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciclo'], meta: { name: 'Ciclo' } }
    /**
     * Find zero or one Ciclo that matches the filter.
     * @param {CicloFindUniqueArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CicloFindUniqueArgs>(args: SelectSubset<T, CicloFindUniqueArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciclo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CicloFindUniqueOrThrowArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CicloFindUniqueOrThrowArgs>(args: SelectSubset<T, CicloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciclo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindFirstArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CicloFindFirstArgs>(args?: SelectSubset<T, CicloFindFirstArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciclo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindFirstOrThrowArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CicloFindFirstOrThrowArgs>(args?: SelectSubset<T, CicloFindFirstOrThrowArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciclos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciclos
     * const ciclos = await prisma.ciclo.findMany()
     * 
     * // Get first 10 Ciclos
     * const ciclos = await prisma.ciclo.findMany({ take: 10 })
     * 
     * // Only select the `id_ciclo`
     * const cicloWithId_cicloOnly = await prisma.ciclo.findMany({ select: { id_ciclo: true } })
     * 
     */
    findMany<T extends CicloFindManyArgs>(args?: SelectSubset<T, CicloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciclo.
     * @param {CicloCreateArgs} args - Arguments to create a Ciclo.
     * @example
     * // Create one Ciclo
     * const Ciclo = await prisma.ciclo.create({
     *   data: {
     *     // ... data to create a Ciclo
     *   }
     * })
     * 
     */
    create<T extends CicloCreateArgs>(args: SelectSubset<T, CicloCreateArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciclos.
     * @param {CicloCreateManyArgs} args - Arguments to create many Ciclos.
     * @example
     * // Create many Ciclos
     * const ciclo = await prisma.ciclo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CicloCreateManyArgs>(args?: SelectSubset<T, CicloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciclos and returns the data saved in the database.
     * @param {CicloCreateManyAndReturnArgs} args - Arguments to create many Ciclos.
     * @example
     * // Create many Ciclos
     * const ciclo = await prisma.ciclo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciclos and only return the `id_ciclo`
     * const cicloWithId_cicloOnly = await prisma.ciclo.createManyAndReturn({
     *   select: { id_ciclo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CicloCreateManyAndReturnArgs>(args?: SelectSubset<T, CicloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciclo.
     * @param {CicloDeleteArgs} args - Arguments to delete one Ciclo.
     * @example
     * // Delete one Ciclo
     * const Ciclo = await prisma.ciclo.delete({
     *   where: {
     *     // ... filter to delete one Ciclo
     *   }
     * })
     * 
     */
    delete<T extends CicloDeleteArgs>(args: SelectSubset<T, CicloDeleteArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciclo.
     * @param {CicloUpdateArgs} args - Arguments to update one Ciclo.
     * @example
     * // Update one Ciclo
     * const ciclo = await prisma.ciclo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CicloUpdateArgs>(args: SelectSubset<T, CicloUpdateArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciclos.
     * @param {CicloDeleteManyArgs} args - Arguments to filter Ciclos to delete.
     * @example
     * // Delete a few Ciclos
     * const { count } = await prisma.ciclo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CicloDeleteManyArgs>(args?: SelectSubset<T, CicloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciclos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciclos
     * const ciclo = await prisma.ciclo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CicloUpdateManyArgs>(args: SelectSubset<T, CicloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciclos and returns the data updated in the database.
     * @param {CicloUpdateManyAndReturnArgs} args - Arguments to update many Ciclos.
     * @example
     * // Update many Ciclos
     * const ciclo = await prisma.ciclo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciclos and only return the `id_ciclo`
     * const cicloWithId_cicloOnly = await prisma.ciclo.updateManyAndReturn({
     *   select: { id_ciclo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CicloUpdateManyAndReturnArgs>(args: SelectSubset<T, CicloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciclo.
     * @param {CicloUpsertArgs} args - Arguments to update or create a Ciclo.
     * @example
     * // Update or create a Ciclo
     * const ciclo = await prisma.ciclo.upsert({
     *   create: {
     *     // ... data to create a Ciclo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciclo we want to update
     *   }
     * })
     */
    upsert<T extends CicloUpsertArgs>(args: SelectSubset<T, CicloUpsertArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciclos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloCountArgs} args - Arguments to filter Ciclos to count.
     * @example
     * // Count the number of Ciclos
     * const count = await prisma.ciclo.count({
     *   where: {
     *     // ... the filter for the Ciclos we want to count
     *   }
     * })
    **/
    count<T extends CicloCountArgs>(
      args?: Subset<T, CicloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CicloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciclo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CicloAggregateArgs>(args: Subset<T, CicloAggregateArgs>): Prisma.PrismaPromise<GetCicloAggregateType<T>>

    /**
     * Group by Ciclo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CicloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CicloGroupByArgs['orderBy'] }
        : { orderBy?: CicloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CicloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCicloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciclo model
   */
  readonly fields: CicloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciclo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CicloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materias<T extends Ciclo$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Ciclo$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ciclo model
   */
  interface CicloFieldRefs {
    readonly id_ciclo: FieldRef<"Ciclo", 'Int'>
    readonly nombre: FieldRef<"Ciclo", 'String'>
    readonly numero: FieldRef<"Ciclo", 'Int'>
    readonly id_carrera: FieldRef<"Ciclo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ciclo findUnique
   */
  export type CicloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo findUniqueOrThrow
   */
  export type CicloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo findFirst
   */
  export type CicloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciclos.
     */
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo findFirstOrThrow
   */
  export type CicloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciclos.
     */
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo findMany
   */
  export type CicloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclos to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo create
   */
  export type CicloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciclo.
     */
    data: XOR<CicloCreateInput, CicloUncheckedCreateInput>
  }

  /**
   * Ciclo createMany
   */
  export type CicloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciclos.
     */
    data: CicloCreateManyInput | CicloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciclo createManyAndReturn
   */
  export type CicloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * The data used to create many Ciclos.
     */
    data: CicloCreateManyInput | CicloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciclo update
   */
  export type CicloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciclo.
     */
    data: XOR<CicloUpdateInput, CicloUncheckedUpdateInput>
    /**
     * Choose, which Ciclo to update.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo updateMany
   */
  export type CicloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciclos.
     */
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyInput>
    /**
     * Filter which Ciclos to update
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to update.
     */
    limit?: number
  }

  /**
   * Ciclo updateManyAndReturn
   */
  export type CicloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * The data used to update Ciclos.
     */
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyInput>
    /**
     * Filter which Ciclos to update
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciclo upsert
   */
  export type CicloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciclo to update in case it exists.
     */
    where: CicloWhereUniqueInput
    /**
     * In case the Ciclo found by the `where` argument doesn't exist, create a new Ciclo with this data.
     */
    create: XOR<CicloCreateInput, CicloUncheckedCreateInput>
    /**
     * In case the Ciclo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CicloUpdateInput, CicloUncheckedUpdateInput>
  }

  /**
   * Ciclo delete
   */
  export type CicloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter which Ciclo to delete.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo deleteMany
   */
  export type CicloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciclos to delete
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to delete.
     */
    limit?: number
  }

  /**
   * Ciclo.materias
   */
  export type Ciclo$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Ciclo without action
   */
  export type CicloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id_materia: number | null
    creditos: number | null
    id_ciclo: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id_materia: number | null
    creditos: number | null
    id_ciclo: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id_materia: number | null
    nombre: string | null
    codigo: string | null
    creditos: number | null
    id_ciclo: number | null
  }

  export type MateriaMaxAggregateOutputType = {
    id_materia: number | null
    nombre: string | null
    codigo: string | null
    creditos: number | null
    id_ciclo: number | null
  }

  export type MateriaCountAggregateOutputType = {
    id_materia: number
    nombre: number
    codigo: number
    creditos: number
    id_ciclo: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id_materia?: true
    creditos?: true
    id_ciclo?: true
  }

  export type MateriaSumAggregateInputType = {
    id_materia?: true
    creditos?: true
    id_ciclo?: true
  }

  export type MateriaMinAggregateInputType = {
    id_materia?: true
    nombre?: true
    codigo?: true
    creditos?: true
    id_ciclo?: true
  }

  export type MateriaMaxAggregateInputType = {
    id_materia?: true
    nombre?: true
    codigo?: true
    creditos?: true
    id_ciclo?: true
  }

  export type MateriaCountAggregateInputType = {
    id_materia?: true
    nombre?: true
    codigo?: true
    creditos?: true
    id_ciclo?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id_materia: number
    nombre: string
    codigo: string
    creditos: number
    id_ciclo: number
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    creditos?: boolean
    id_ciclo?: boolean
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    docentes?: boolean | Materia$docentesArgs<ExtArgs>
    estudiantes?: boolean | Materia$estudiantesArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    creditos?: boolean
    id_ciclo?: boolean
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    creditos?: boolean
    id_ciclo?: boolean
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    creditos?: boolean
    id_ciclo?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_materia" | "nombre" | "codigo" | "creditos" | "id_ciclo", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    docentes?: boolean | Materia$docentesArgs<ExtArgs>
    estudiantes?: boolean | Materia$estudiantesArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      ciclo: Prisma.$CicloPayload<ExtArgs>
      docentes: Prisma.$Docente_MateriaPayload<ExtArgs>[]
      estudiantes: Prisma.$Estudiante_MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_materia: number
      nombre: string
      codigo: string
      creditos: number
      id_ciclo: number
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.findMany({ select: { id_materia: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.createManyAndReturn({
     *   select: { id_materia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.updateManyAndReturn({
     *   select: { id_materia: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciclo<T extends CicloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CicloDefaultArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    docentes<T extends Materia$docentesArgs<ExtArgs> = {}>(args?: Subset<T, Materia$docentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estudiantes<T extends Materia$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, Materia$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id_materia: FieldRef<"Materia", 'Int'>
    readonly nombre: FieldRef<"Materia", 'String'>
    readonly codigo: FieldRef<"Materia", 'String'>
    readonly creditos: FieldRef<"Materia", 'Int'>
    readonly id_ciclo: FieldRef<"Materia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.docentes
   */
  export type Materia$docentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    where?: Docente_MateriaWhereInput
    orderBy?: Docente_MateriaOrderByWithRelationInput | Docente_MateriaOrderByWithRelationInput[]
    cursor?: Docente_MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Docente_MateriaScalarFieldEnum | Docente_MateriaScalarFieldEnum[]
  }

  /**
   * Materia.estudiantes
   */
  export type Materia$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    where?: Estudiante_MateriaWhereInput
    orderBy?: Estudiante_MateriaOrderByWithRelationInput | Estudiante_MateriaOrderByWithRelationInput[]
    cursor?: Estudiante_MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Estudiante_MateriaScalarFieldEnum | Estudiante_MateriaScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Docente_Materia
   */

  export type AggregateDocente_Materia = {
    _count: Docente_MateriaCountAggregateOutputType | null
    _avg: Docente_MateriaAvgAggregateOutputType | null
    _sum: Docente_MateriaSumAggregateOutputType | null
    _min: Docente_MateriaMinAggregateOutputType | null
    _max: Docente_MateriaMaxAggregateOutputType | null
  }

  export type Docente_MateriaAvgAggregateOutputType = {
    id_docente: number | null
    id_materia: number | null
    id_periodo: number | null
  }

  export type Docente_MateriaSumAggregateOutputType = {
    id_docente: number | null
    id_materia: number | null
    id_periodo: number | null
  }

  export type Docente_MateriaMinAggregateOutputType = {
    id_docente: number | null
    id_materia: number | null
    id_periodo: number | null
  }

  export type Docente_MateriaMaxAggregateOutputType = {
    id_docente: number | null
    id_materia: number | null
    id_periodo: number | null
  }

  export type Docente_MateriaCountAggregateOutputType = {
    id_docente: number
    id_materia: number
    id_periodo: number
    _all: number
  }


  export type Docente_MateriaAvgAggregateInputType = {
    id_docente?: true
    id_materia?: true
    id_periodo?: true
  }

  export type Docente_MateriaSumAggregateInputType = {
    id_docente?: true
    id_materia?: true
    id_periodo?: true
  }

  export type Docente_MateriaMinAggregateInputType = {
    id_docente?: true
    id_materia?: true
    id_periodo?: true
  }

  export type Docente_MateriaMaxAggregateInputType = {
    id_docente?: true
    id_materia?: true
    id_periodo?: true
  }

  export type Docente_MateriaCountAggregateInputType = {
    id_docente?: true
    id_materia?: true
    id_periodo?: true
    _all?: true
  }

  export type Docente_MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente_Materia to aggregate.
     */
    where?: Docente_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docente_Materias to fetch.
     */
    orderBy?: Docente_MateriaOrderByWithRelationInput | Docente_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Docente_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docente_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docente_Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Docente_Materias
    **/
    _count?: true | Docente_MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Docente_MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Docente_MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Docente_MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Docente_MateriaMaxAggregateInputType
  }

  export type GetDocente_MateriaAggregateType<T extends Docente_MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateDocente_Materia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocente_Materia[P]>
      : GetScalarType<T[P], AggregateDocente_Materia[P]>
  }




  export type Docente_MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Docente_MateriaWhereInput
    orderBy?: Docente_MateriaOrderByWithAggregationInput | Docente_MateriaOrderByWithAggregationInput[]
    by: Docente_MateriaScalarFieldEnum[] | Docente_MateriaScalarFieldEnum
    having?: Docente_MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Docente_MateriaCountAggregateInputType | true
    _avg?: Docente_MateriaAvgAggregateInputType
    _sum?: Docente_MateriaSumAggregateInputType
    _min?: Docente_MateriaMinAggregateInputType
    _max?: Docente_MateriaMaxAggregateInputType
  }

  export type Docente_MateriaGroupByOutputType = {
    id_docente: number
    id_materia: number
    id_periodo: number
    _count: Docente_MateriaCountAggregateOutputType | null
    _avg: Docente_MateriaAvgAggregateOutputType | null
    _sum: Docente_MateriaSumAggregateOutputType | null
    _min: Docente_MateriaMinAggregateOutputType | null
    _max: Docente_MateriaMaxAggregateOutputType | null
  }

  type GetDocente_MateriaGroupByPayload<T extends Docente_MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Docente_MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Docente_MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Docente_MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], Docente_MateriaGroupByOutputType[P]>
        }
      >
    >


  export type Docente_MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_docente?: boolean
    id_materia?: boolean
    id_periodo?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente_Materia"]>

  export type Docente_MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_docente?: boolean
    id_materia?: boolean
    id_periodo?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente_Materia"]>

  export type Docente_MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_docente?: boolean
    id_materia?: boolean
    id_periodo?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente_Materia"]>

  export type Docente_MateriaSelectScalar = {
    id_docente?: boolean
    id_materia?: boolean
    id_periodo?: boolean
  }

  export type Docente_MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_docente" | "id_materia" | "id_periodo", ExtArgs["result"]["docente_Materia"]>
  export type Docente_MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type Docente_MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type Docente_MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }

  export type $Docente_MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Docente_Materia"
    objects: {
      docente: Prisma.$DocentePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
      periodo: Prisma.$PeriodoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_docente: number
      id_materia: number
      id_periodo: number
    }, ExtArgs["result"]["docente_Materia"]>
    composites: {}
  }

  type Docente_MateriaGetPayload<S extends boolean | null | undefined | Docente_MateriaDefaultArgs> = $Result.GetResult<Prisma.$Docente_MateriaPayload, S>

  type Docente_MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Docente_MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Docente_MateriaCountAggregateInputType | true
    }

  export interface Docente_MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Docente_Materia'], meta: { name: 'Docente_Materia' } }
    /**
     * Find zero or one Docente_Materia that matches the filter.
     * @param {Docente_MateriaFindUniqueArgs} args - Arguments to find a Docente_Materia
     * @example
     * // Get one Docente_Materia
     * const docente_Materia = await prisma.docente_Materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Docente_MateriaFindUniqueArgs>(args: SelectSubset<T, Docente_MateriaFindUniqueArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Docente_Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Docente_MateriaFindUniqueOrThrowArgs} args - Arguments to find a Docente_Materia
     * @example
     * // Get one Docente_Materia
     * const docente_Materia = await prisma.docente_Materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Docente_MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, Docente_MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente_Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Docente_MateriaFindFirstArgs} args - Arguments to find a Docente_Materia
     * @example
     * // Get one Docente_Materia
     * const docente_Materia = await prisma.docente_Materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Docente_MateriaFindFirstArgs>(args?: SelectSubset<T, Docente_MateriaFindFirstArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente_Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Docente_MateriaFindFirstOrThrowArgs} args - Arguments to find a Docente_Materia
     * @example
     * // Get one Docente_Materia
     * const docente_Materia = await prisma.docente_Materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Docente_MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, Docente_MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Docente_Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Docente_MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Docente_Materias
     * const docente_Materias = await prisma.docente_Materia.findMany()
     * 
     * // Get first 10 Docente_Materias
     * const docente_Materias = await prisma.docente_Materia.findMany({ take: 10 })
     * 
     * // Only select the `id_docente`
     * const docente_MateriaWithId_docenteOnly = await prisma.docente_Materia.findMany({ select: { id_docente: true } })
     * 
     */
    findMany<T extends Docente_MateriaFindManyArgs>(args?: SelectSubset<T, Docente_MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Docente_Materia.
     * @param {Docente_MateriaCreateArgs} args - Arguments to create a Docente_Materia.
     * @example
     * // Create one Docente_Materia
     * const Docente_Materia = await prisma.docente_Materia.create({
     *   data: {
     *     // ... data to create a Docente_Materia
     *   }
     * })
     * 
     */
    create<T extends Docente_MateriaCreateArgs>(args: SelectSubset<T, Docente_MateriaCreateArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Docente_Materias.
     * @param {Docente_MateriaCreateManyArgs} args - Arguments to create many Docente_Materias.
     * @example
     * // Create many Docente_Materias
     * const docente_Materia = await prisma.docente_Materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Docente_MateriaCreateManyArgs>(args?: SelectSubset<T, Docente_MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Docente_Materias and returns the data saved in the database.
     * @param {Docente_MateriaCreateManyAndReturnArgs} args - Arguments to create many Docente_Materias.
     * @example
     * // Create many Docente_Materias
     * const docente_Materia = await prisma.docente_Materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Docente_Materias and only return the `id_docente`
     * const docente_MateriaWithId_docenteOnly = await prisma.docente_Materia.createManyAndReturn({
     *   select: { id_docente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Docente_MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, Docente_MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Docente_Materia.
     * @param {Docente_MateriaDeleteArgs} args - Arguments to delete one Docente_Materia.
     * @example
     * // Delete one Docente_Materia
     * const Docente_Materia = await prisma.docente_Materia.delete({
     *   where: {
     *     // ... filter to delete one Docente_Materia
     *   }
     * })
     * 
     */
    delete<T extends Docente_MateriaDeleteArgs>(args: SelectSubset<T, Docente_MateriaDeleteArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Docente_Materia.
     * @param {Docente_MateriaUpdateArgs} args - Arguments to update one Docente_Materia.
     * @example
     * // Update one Docente_Materia
     * const docente_Materia = await prisma.docente_Materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Docente_MateriaUpdateArgs>(args: SelectSubset<T, Docente_MateriaUpdateArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Docente_Materias.
     * @param {Docente_MateriaDeleteManyArgs} args - Arguments to filter Docente_Materias to delete.
     * @example
     * // Delete a few Docente_Materias
     * const { count } = await prisma.docente_Materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Docente_MateriaDeleteManyArgs>(args?: SelectSubset<T, Docente_MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docente_Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Docente_MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Docente_Materias
     * const docente_Materia = await prisma.docente_Materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Docente_MateriaUpdateManyArgs>(args: SelectSubset<T, Docente_MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docente_Materias and returns the data updated in the database.
     * @param {Docente_MateriaUpdateManyAndReturnArgs} args - Arguments to update many Docente_Materias.
     * @example
     * // Update many Docente_Materias
     * const docente_Materia = await prisma.docente_Materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Docente_Materias and only return the `id_docente`
     * const docente_MateriaWithId_docenteOnly = await prisma.docente_Materia.updateManyAndReturn({
     *   select: { id_docente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Docente_MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, Docente_MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Docente_Materia.
     * @param {Docente_MateriaUpsertArgs} args - Arguments to update or create a Docente_Materia.
     * @example
     * // Update or create a Docente_Materia
     * const docente_Materia = await prisma.docente_Materia.upsert({
     *   create: {
     *     // ... data to create a Docente_Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Docente_Materia we want to update
     *   }
     * })
     */
    upsert<T extends Docente_MateriaUpsertArgs>(args: SelectSubset<T, Docente_MateriaUpsertArgs<ExtArgs>>): Prisma__Docente_MateriaClient<$Result.GetResult<Prisma.$Docente_MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Docente_Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Docente_MateriaCountArgs} args - Arguments to filter Docente_Materias to count.
     * @example
     * // Count the number of Docente_Materias
     * const count = await prisma.docente_Materia.count({
     *   where: {
     *     // ... the filter for the Docente_Materias we want to count
     *   }
     * })
    **/
    count<T extends Docente_MateriaCountArgs>(
      args?: Subset<T, Docente_MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Docente_MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Docente_Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Docente_MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Docente_MateriaAggregateArgs>(args: Subset<T, Docente_MateriaAggregateArgs>): Prisma.PrismaPromise<GetDocente_MateriaAggregateType<T>>

    /**
     * Group by Docente_Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Docente_MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Docente_MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Docente_MateriaGroupByArgs['orderBy'] }
        : { orderBy?: Docente_MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Docente_MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocente_MateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Docente_Materia model
   */
  readonly fields: Docente_MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Docente_Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Docente_MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docente<T extends DocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocenteDefaultArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periodo<T extends PeriodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodoDefaultArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Docente_Materia model
   */
  interface Docente_MateriaFieldRefs {
    readonly id_docente: FieldRef<"Docente_Materia", 'Int'>
    readonly id_materia: FieldRef<"Docente_Materia", 'Int'>
    readonly id_periodo: FieldRef<"Docente_Materia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Docente_Materia findUnique
   */
  export type Docente_MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Docente_Materia to fetch.
     */
    where: Docente_MateriaWhereUniqueInput
  }

  /**
   * Docente_Materia findUniqueOrThrow
   */
  export type Docente_MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Docente_Materia to fetch.
     */
    where: Docente_MateriaWhereUniqueInput
  }

  /**
   * Docente_Materia findFirst
   */
  export type Docente_MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Docente_Materia to fetch.
     */
    where?: Docente_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docente_Materias to fetch.
     */
    orderBy?: Docente_MateriaOrderByWithRelationInput | Docente_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docente_Materias.
     */
    cursor?: Docente_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docente_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docente_Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docente_Materias.
     */
    distinct?: Docente_MateriaScalarFieldEnum | Docente_MateriaScalarFieldEnum[]
  }

  /**
   * Docente_Materia findFirstOrThrow
   */
  export type Docente_MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Docente_Materia to fetch.
     */
    where?: Docente_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docente_Materias to fetch.
     */
    orderBy?: Docente_MateriaOrderByWithRelationInput | Docente_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docente_Materias.
     */
    cursor?: Docente_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docente_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docente_Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docente_Materias.
     */
    distinct?: Docente_MateriaScalarFieldEnum | Docente_MateriaScalarFieldEnum[]
  }

  /**
   * Docente_Materia findMany
   */
  export type Docente_MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Docente_Materias to fetch.
     */
    where?: Docente_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docente_Materias to fetch.
     */
    orderBy?: Docente_MateriaOrderByWithRelationInput | Docente_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Docente_Materias.
     */
    cursor?: Docente_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docente_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docente_Materias.
     */
    skip?: number
    distinct?: Docente_MateriaScalarFieldEnum | Docente_MateriaScalarFieldEnum[]
  }

  /**
   * Docente_Materia create
   */
  export type Docente_MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Docente_Materia.
     */
    data: XOR<Docente_MateriaCreateInput, Docente_MateriaUncheckedCreateInput>
  }

  /**
   * Docente_Materia createMany
   */
  export type Docente_MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Docente_Materias.
     */
    data: Docente_MateriaCreateManyInput | Docente_MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente_Materia createManyAndReturn
   */
  export type Docente_MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Docente_Materias.
     */
    data: Docente_MateriaCreateManyInput | Docente_MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Docente_Materia update
   */
  export type Docente_MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Docente_Materia.
     */
    data: XOR<Docente_MateriaUpdateInput, Docente_MateriaUncheckedUpdateInput>
    /**
     * Choose, which Docente_Materia to update.
     */
    where: Docente_MateriaWhereUniqueInput
  }

  /**
   * Docente_Materia updateMany
   */
  export type Docente_MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Docente_Materias.
     */
    data: XOR<Docente_MateriaUpdateManyMutationInput, Docente_MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Docente_Materias to update
     */
    where?: Docente_MateriaWhereInput
    /**
     * Limit how many Docente_Materias to update.
     */
    limit?: number
  }

  /**
   * Docente_Materia updateManyAndReturn
   */
  export type Docente_MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Docente_Materias.
     */
    data: XOR<Docente_MateriaUpdateManyMutationInput, Docente_MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Docente_Materias to update
     */
    where?: Docente_MateriaWhereInput
    /**
     * Limit how many Docente_Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Docente_Materia upsert
   */
  export type Docente_MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Docente_Materia to update in case it exists.
     */
    where: Docente_MateriaWhereUniqueInput
    /**
     * In case the Docente_Materia found by the `where` argument doesn't exist, create a new Docente_Materia with this data.
     */
    create: XOR<Docente_MateriaCreateInput, Docente_MateriaUncheckedCreateInput>
    /**
     * In case the Docente_Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Docente_MateriaUpdateInput, Docente_MateriaUncheckedUpdateInput>
  }

  /**
   * Docente_Materia delete
   */
  export type Docente_MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
    /**
     * Filter which Docente_Materia to delete.
     */
    where: Docente_MateriaWhereUniqueInput
  }

  /**
   * Docente_Materia deleteMany
   */
  export type Docente_MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente_Materias to delete
     */
    where?: Docente_MateriaWhereInput
    /**
     * Limit how many Docente_Materias to delete.
     */
    limit?: number
  }

  /**
   * Docente_Materia without action
   */
  export type Docente_MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente_Materia
     */
    select?: Docente_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente_Materia
     */
    omit?: Docente_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Docente_MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Estudiante_Materia
   */

  export type AggregateEstudiante_Materia = {
    _count: Estudiante_MateriaCountAggregateOutputType | null
    _avg: Estudiante_MateriaAvgAggregateOutputType | null
    _sum: Estudiante_MateriaSumAggregateOutputType | null
    _min: Estudiante_MateriaMinAggregateOutputType | null
    _max: Estudiante_MateriaMaxAggregateOutputType | null
  }

  export type Estudiante_MateriaAvgAggregateOutputType = {
    id_estudiante: number | null
    id_materia: number | null
    id_periodo: number | null
  }

  export type Estudiante_MateriaSumAggregateOutputType = {
    id_estudiante: number | null
    id_materia: number | null
    id_periodo: number | null
  }

  export type Estudiante_MateriaMinAggregateOutputType = {
    id_estudiante: number | null
    id_materia: number | null
    id_periodo: number | null
    fecha_inscripcion: Date | null
  }

  export type Estudiante_MateriaMaxAggregateOutputType = {
    id_estudiante: number | null
    id_materia: number | null
    id_periodo: number | null
    fecha_inscripcion: Date | null
  }

  export type Estudiante_MateriaCountAggregateOutputType = {
    id_estudiante: number
    id_materia: number
    id_periodo: number
    fecha_inscripcion: number
    _all: number
  }


  export type Estudiante_MateriaAvgAggregateInputType = {
    id_estudiante?: true
    id_materia?: true
    id_periodo?: true
  }

  export type Estudiante_MateriaSumAggregateInputType = {
    id_estudiante?: true
    id_materia?: true
    id_periodo?: true
  }

  export type Estudiante_MateriaMinAggregateInputType = {
    id_estudiante?: true
    id_materia?: true
    id_periodo?: true
    fecha_inscripcion?: true
  }

  export type Estudiante_MateriaMaxAggregateInputType = {
    id_estudiante?: true
    id_materia?: true
    id_periodo?: true
    fecha_inscripcion?: true
  }

  export type Estudiante_MateriaCountAggregateInputType = {
    id_estudiante?: true
    id_materia?: true
    id_periodo?: true
    fecha_inscripcion?: true
    _all?: true
  }

  export type Estudiante_MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante_Materia to aggregate.
     */
    where?: Estudiante_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiante_Materias to fetch.
     */
    orderBy?: Estudiante_MateriaOrderByWithRelationInput | Estudiante_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Estudiante_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiante_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiante_Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiante_Materias
    **/
    _count?: true | Estudiante_MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estudiante_MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estudiante_MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estudiante_MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estudiante_MateriaMaxAggregateInputType
  }

  export type GetEstudiante_MateriaAggregateType<T extends Estudiante_MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante_Materia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante_Materia[P]>
      : GetScalarType<T[P], AggregateEstudiante_Materia[P]>
  }




  export type Estudiante_MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Estudiante_MateriaWhereInput
    orderBy?: Estudiante_MateriaOrderByWithAggregationInput | Estudiante_MateriaOrderByWithAggregationInput[]
    by: Estudiante_MateriaScalarFieldEnum[] | Estudiante_MateriaScalarFieldEnum
    having?: Estudiante_MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estudiante_MateriaCountAggregateInputType | true
    _avg?: Estudiante_MateriaAvgAggregateInputType
    _sum?: Estudiante_MateriaSumAggregateInputType
    _min?: Estudiante_MateriaMinAggregateInputType
    _max?: Estudiante_MateriaMaxAggregateInputType
  }

  export type Estudiante_MateriaGroupByOutputType = {
    id_estudiante: number
    id_materia: number
    id_periodo: number
    fecha_inscripcion: Date
    _count: Estudiante_MateriaCountAggregateOutputType | null
    _avg: Estudiante_MateriaAvgAggregateOutputType | null
    _sum: Estudiante_MateriaSumAggregateOutputType | null
    _min: Estudiante_MateriaMinAggregateOutputType | null
    _max: Estudiante_MateriaMaxAggregateOutputType | null
  }

  type GetEstudiante_MateriaGroupByPayload<T extends Estudiante_MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estudiante_MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estudiante_MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estudiante_MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], Estudiante_MateriaGroupByOutputType[P]>
        }
      >
    >


  export type Estudiante_MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    id_materia?: boolean
    id_periodo?: boolean
    fecha_inscripcion?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante_Materia"]>

  export type Estudiante_MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    id_materia?: boolean
    id_periodo?: boolean
    fecha_inscripcion?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante_Materia"]>

  export type Estudiante_MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    id_materia?: boolean
    id_periodo?: boolean
    fecha_inscripcion?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante_Materia"]>

  export type Estudiante_MateriaSelectScalar = {
    id_estudiante?: boolean
    id_materia?: boolean
    id_periodo?: boolean
    fecha_inscripcion?: boolean
  }

  export type Estudiante_MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estudiante" | "id_materia" | "id_periodo" | "fecha_inscripcion", ExtArgs["result"]["estudiante_Materia"]>
  export type Estudiante_MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type Estudiante_MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type Estudiante_MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }

  export type $Estudiante_MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante_Materia"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
      periodo: Prisma.$PeriodoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estudiante: number
      id_materia: number
      id_periodo: number
      fecha_inscripcion: Date
    }, ExtArgs["result"]["estudiante_Materia"]>
    composites: {}
  }

  type Estudiante_MateriaGetPayload<S extends boolean | null | undefined | Estudiante_MateriaDefaultArgs> = $Result.GetResult<Prisma.$Estudiante_MateriaPayload, S>

  type Estudiante_MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Estudiante_MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estudiante_MateriaCountAggregateInputType | true
    }

  export interface Estudiante_MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante_Materia'], meta: { name: 'Estudiante_Materia' } }
    /**
     * Find zero or one Estudiante_Materia that matches the filter.
     * @param {Estudiante_MateriaFindUniqueArgs} args - Arguments to find a Estudiante_Materia
     * @example
     * // Get one Estudiante_Materia
     * const estudiante_Materia = await prisma.estudiante_Materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Estudiante_MateriaFindUniqueArgs>(args: SelectSubset<T, Estudiante_MateriaFindUniqueArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante_Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Estudiante_MateriaFindUniqueOrThrowArgs} args - Arguments to find a Estudiante_Materia
     * @example
     * // Get one Estudiante_Materia
     * const estudiante_Materia = await prisma.estudiante_Materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Estudiante_MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, Estudiante_MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante_Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_MateriaFindFirstArgs} args - Arguments to find a Estudiante_Materia
     * @example
     * // Get one Estudiante_Materia
     * const estudiante_Materia = await prisma.estudiante_Materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Estudiante_MateriaFindFirstArgs>(args?: SelectSubset<T, Estudiante_MateriaFindFirstArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante_Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_MateriaFindFirstOrThrowArgs} args - Arguments to find a Estudiante_Materia
     * @example
     * // Get one Estudiante_Materia
     * const estudiante_Materia = await prisma.estudiante_Materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Estudiante_MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, Estudiante_MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiante_Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiante_Materias
     * const estudiante_Materias = await prisma.estudiante_Materia.findMany()
     * 
     * // Get first 10 Estudiante_Materias
     * const estudiante_Materias = await prisma.estudiante_Materia.findMany({ take: 10 })
     * 
     * // Only select the `id_estudiante`
     * const estudiante_MateriaWithId_estudianteOnly = await prisma.estudiante_Materia.findMany({ select: { id_estudiante: true } })
     * 
     */
    findMany<T extends Estudiante_MateriaFindManyArgs>(args?: SelectSubset<T, Estudiante_MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante_Materia.
     * @param {Estudiante_MateriaCreateArgs} args - Arguments to create a Estudiante_Materia.
     * @example
     * // Create one Estudiante_Materia
     * const Estudiante_Materia = await prisma.estudiante_Materia.create({
     *   data: {
     *     // ... data to create a Estudiante_Materia
     *   }
     * })
     * 
     */
    create<T extends Estudiante_MateriaCreateArgs>(args: SelectSubset<T, Estudiante_MateriaCreateArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiante_Materias.
     * @param {Estudiante_MateriaCreateManyArgs} args - Arguments to create many Estudiante_Materias.
     * @example
     * // Create many Estudiante_Materias
     * const estudiante_Materia = await prisma.estudiante_Materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Estudiante_MateriaCreateManyArgs>(args?: SelectSubset<T, Estudiante_MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudiante_Materias and returns the data saved in the database.
     * @param {Estudiante_MateriaCreateManyAndReturnArgs} args - Arguments to create many Estudiante_Materias.
     * @example
     * // Create many Estudiante_Materias
     * const estudiante_Materia = await prisma.estudiante_Materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudiante_Materias and only return the `id_estudiante`
     * const estudiante_MateriaWithId_estudianteOnly = await prisma.estudiante_Materia.createManyAndReturn({
     *   select: { id_estudiante: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Estudiante_MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, Estudiante_MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estudiante_Materia.
     * @param {Estudiante_MateriaDeleteArgs} args - Arguments to delete one Estudiante_Materia.
     * @example
     * // Delete one Estudiante_Materia
     * const Estudiante_Materia = await prisma.estudiante_Materia.delete({
     *   where: {
     *     // ... filter to delete one Estudiante_Materia
     *   }
     * })
     * 
     */
    delete<T extends Estudiante_MateriaDeleteArgs>(args: SelectSubset<T, Estudiante_MateriaDeleteArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante_Materia.
     * @param {Estudiante_MateriaUpdateArgs} args - Arguments to update one Estudiante_Materia.
     * @example
     * // Update one Estudiante_Materia
     * const estudiante_Materia = await prisma.estudiante_Materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Estudiante_MateriaUpdateArgs>(args: SelectSubset<T, Estudiante_MateriaUpdateArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiante_Materias.
     * @param {Estudiante_MateriaDeleteManyArgs} args - Arguments to filter Estudiante_Materias to delete.
     * @example
     * // Delete a few Estudiante_Materias
     * const { count } = await prisma.estudiante_Materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Estudiante_MateriaDeleteManyArgs>(args?: SelectSubset<T, Estudiante_MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiante_Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiante_Materias
     * const estudiante_Materia = await prisma.estudiante_Materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Estudiante_MateriaUpdateManyArgs>(args: SelectSubset<T, Estudiante_MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiante_Materias and returns the data updated in the database.
     * @param {Estudiante_MateriaUpdateManyAndReturnArgs} args - Arguments to update many Estudiante_Materias.
     * @example
     * // Update many Estudiante_Materias
     * const estudiante_Materia = await prisma.estudiante_Materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estudiante_Materias and only return the `id_estudiante`
     * const estudiante_MateriaWithId_estudianteOnly = await prisma.estudiante_Materia.updateManyAndReturn({
     *   select: { id_estudiante: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Estudiante_MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, Estudiante_MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estudiante_Materia.
     * @param {Estudiante_MateriaUpsertArgs} args - Arguments to update or create a Estudiante_Materia.
     * @example
     * // Update or create a Estudiante_Materia
     * const estudiante_Materia = await prisma.estudiante_Materia.upsert({
     *   create: {
     *     // ... data to create a Estudiante_Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante_Materia we want to update
     *   }
     * })
     */
    upsert<T extends Estudiante_MateriaUpsertArgs>(args: SelectSubset<T, Estudiante_MateriaUpsertArgs<ExtArgs>>): Prisma__Estudiante_MateriaClient<$Result.GetResult<Prisma.$Estudiante_MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiante_Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_MateriaCountArgs} args - Arguments to filter Estudiante_Materias to count.
     * @example
     * // Count the number of Estudiante_Materias
     * const count = await prisma.estudiante_Materia.count({
     *   where: {
     *     // ... the filter for the Estudiante_Materias we want to count
     *   }
     * })
    **/
    count<T extends Estudiante_MateriaCountArgs>(
      args?: Subset<T, Estudiante_MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estudiante_MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante_Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Estudiante_MateriaAggregateArgs>(args: Subset<T, Estudiante_MateriaAggregateArgs>): Prisma.PrismaPromise<GetEstudiante_MateriaAggregateType<T>>

    /**
     * Group by Estudiante_Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Estudiante_MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Estudiante_MateriaGroupByArgs['orderBy'] }
        : { orderBy?: Estudiante_MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Estudiante_MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudiante_MateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante_Materia model
   */
  readonly fields: Estudiante_MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante_Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Estudiante_MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periodo<T extends PeriodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodoDefaultArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estudiante_Materia model
   */
  interface Estudiante_MateriaFieldRefs {
    readonly id_estudiante: FieldRef<"Estudiante_Materia", 'Int'>
    readonly id_materia: FieldRef<"Estudiante_Materia", 'Int'>
    readonly id_periodo: FieldRef<"Estudiante_Materia", 'Int'>
    readonly fecha_inscripcion: FieldRef<"Estudiante_Materia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante_Materia findUnique
   */
  export type Estudiante_MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante_Materia to fetch.
     */
    where: Estudiante_MateriaWhereUniqueInput
  }

  /**
   * Estudiante_Materia findUniqueOrThrow
   */
  export type Estudiante_MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante_Materia to fetch.
     */
    where: Estudiante_MateriaWhereUniqueInput
  }

  /**
   * Estudiante_Materia findFirst
   */
  export type Estudiante_MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante_Materia to fetch.
     */
    where?: Estudiante_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiante_Materias to fetch.
     */
    orderBy?: Estudiante_MateriaOrderByWithRelationInput | Estudiante_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiante_Materias.
     */
    cursor?: Estudiante_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiante_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiante_Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiante_Materias.
     */
    distinct?: Estudiante_MateriaScalarFieldEnum | Estudiante_MateriaScalarFieldEnum[]
  }

  /**
   * Estudiante_Materia findFirstOrThrow
   */
  export type Estudiante_MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante_Materia to fetch.
     */
    where?: Estudiante_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiante_Materias to fetch.
     */
    orderBy?: Estudiante_MateriaOrderByWithRelationInput | Estudiante_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiante_Materias.
     */
    cursor?: Estudiante_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiante_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiante_Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiante_Materias.
     */
    distinct?: Estudiante_MateriaScalarFieldEnum | Estudiante_MateriaScalarFieldEnum[]
  }

  /**
   * Estudiante_Materia findMany
   */
  export type Estudiante_MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante_Materias to fetch.
     */
    where?: Estudiante_MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiante_Materias to fetch.
     */
    orderBy?: Estudiante_MateriaOrderByWithRelationInput | Estudiante_MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiante_Materias.
     */
    cursor?: Estudiante_MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiante_Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiante_Materias.
     */
    skip?: number
    distinct?: Estudiante_MateriaScalarFieldEnum | Estudiante_MateriaScalarFieldEnum[]
  }

  /**
   * Estudiante_Materia create
   */
  export type Estudiante_MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante_Materia.
     */
    data: XOR<Estudiante_MateriaCreateInput, Estudiante_MateriaUncheckedCreateInput>
  }

  /**
   * Estudiante_Materia createMany
   */
  export type Estudiante_MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiante_Materias.
     */
    data: Estudiante_MateriaCreateManyInput | Estudiante_MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante_Materia createManyAndReturn
   */
  export type Estudiante_MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Estudiante_Materias.
     */
    data: Estudiante_MateriaCreateManyInput | Estudiante_MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante_Materia update
   */
  export type Estudiante_MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante_Materia.
     */
    data: XOR<Estudiante_MateriaUpdateInput, Estudiante_MateriaUncheckedUpdateInput>
    /**
     * Choose, which Estudiante_Materia to update.
     */
    where: Estudiante_MateriaWhereUniqueInput
  }

  /**
   * Estudiante_Materia updateMany
   */
  export type Estudiante_MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiante_Materias.
     */
    data: XOR<Estudiante_MateriaUpdateManyMutationInput, Estudiante_MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Estudiante_Materias to update
     */
    where?: Estudiante_MateriaWhereInput
    /**
     * Limit how many Estudiante_Materias to update.
     */
    limit?: number
  }

  /**
   * Estudiante_Materia updateManyAndReturn
   */
  export type Estudiante_MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Estudiante_Materias.
     */
    data: XOR<Estudiante_MateriaUpdateManyMutationInput, Estudiante_MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Estudiante_Materias to update
     */
    where?: Estudiante_MateriaWhereInput
    /**
     * Limit how many Estudiante_Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante_Materia upsert
   */
  export type Estudiante_MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante_Materia to update in case it exists.
     */
    where: Estudiante_MateriaWhereUniqueInput
    /**
     * In case the Estudiante_Materia found by the `where` argument doesn't exist, create a new Estudiante_Materia with this data.
     */
    create: XOR<Estudiante_MateriaCreateInput, Estudiante_MateriaUncheckedCreateInput>
    /**
     * In case the Estudiante_Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Estudiante_MateriaUpdateInput, Estudiante_MateriaUncheckedUpdateInput>
  }

  /**
   * Estudiante_Materia delete
   */
  export type Estudiante_MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
    /**
     * Filter which Estudiante_Materia to delete.
     */
    where: Estudiante_MateriaWhereUniqueInput
  }

  /**
   * Estudiante_Materia deleteMany
   */
  export type Estudiante_MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante_Materias to delete
     */
    where?: Estudiante_MateriaWhereInput
    /**
     * Limit how many Estudiante_Materias to delete.
     */
    limit?: number
  }

  /**
   * Estudiante_Materia without action
   */
  export type Estudiante_MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante_Materia
     */
    select?: Estudiante_MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante_Materia
     */
    omit?: Estudiante_MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estudiante_MateriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id_admin: 'id_admin',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DocenteScalarFieldEnum: {
    id_docente: 'id_docente',
    userId: 'userId',
    especialidad: 'especialidad'
  };

  export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
    id_estudiante: 'id_estudiante',
    userId: 'userId',
    fecha_nacimiento: 'fecha_nacimiento',
    id_carrera: 'id_carrera',
    estado: 'estado'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const CarreraScalarFieldEnum: {
    id_carrera: 'id_carrera',
    nombre: 'nombre',
    duracion: 'duracion',
    facultad: 'facultad'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const PeriodoScalarFieldEnum: {
    id_periodo: 'id_periodo',
    nombre: 'nombre',
    activo: 'activo'
  };

  export type PeriodoScalarFieldEnum = (typeof PeriodoScalarFieldEnum)[keyof typeof PeriodoScalarFieldEnum]


  export const CicloScalarFieldEnum: {
    id_ciclo: 'id_ciclo',
    nombre: 'nombre',
    numero: 'numero',
    id_carrera: 'id_carrera'
  };

  export type CicloScalarFieldEnum = (typeof CicloScalarFieldEnum)[keyof typeof CicloScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id_materia: 'id_materia',
    nombre: 'nombre',
    codigo: 'codigo',
    creditos: 'creditos',
    id_ciclo: 'id_ciclo'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const Docente_MateriaScalarFieldEnum: {
    id_docente: 'id_docente',
    id_materia: 'id_materia',
    id_periodo: 'id_periodo'
  };

  export type Docente_MateriaScalarFieldEnum = (typeof Docente_MateriaScalarFieldEnum)[keyof typeof Docente_MateriaScalarFieldEnum]


  export const Estudiante_MateriaScalarFieldEnum: {
    id_estudiante: 'id_estudiante',
    id_materia: 'id_materia',
    id_periodo: 'id_periodo',
    fecha_inscripcion: 'fecha_inscripcion'
  };

  export type Estudiante_MateriaScalarFieldEnum = (typeof Estudiante_MateriaScalarFieldEnum)[keyof typeof Estudiante_MateriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id_admin?: IntFilter<"Admin"> | number
    userId?: IntFilter<"Admin"> | number
  }

  export type AdminOrderByWithRelationInput = {
    id_admin?: SortOrder
    userId?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id_admin?: number
    userId?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
  }, "id_admin" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id_admin?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id_admin?: IntWithAggregatesFilter<"Admin"> | number
    userId?: IntWithAggregatesFilter<"Admin"> | number
  }

  export type DocenteWhereInput = {
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    id_docente?: IntFilter<"Docente"> | number
    userId?: IntFilter<"Docente"> | number
    especialidad?: StringFilter<"Docente"> | string
    materias?: Docente_MateriaListRelationFilter
  }

  export type DocenteOrderByWithRelationInput = {
    id_docente?: SortOrder
    userId?: SortOrder
    especialidad?: SortOrder
    materias?: Docente_MateriaOrderByRelationAggregateInput
  }

  export type DocenteWhereUniqueInput = Prisma.AtLeast<{
    id_docente?: number
    userId?: number
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    especialidad?: StringFilter<"Docente"> | string
    materias?: Docente_MateriaListRelationFilter
  }, "id_docente" | "userId">

  export type DocenteOrderByWithAggregationInput = {
    id_docente?: SortOrder
    userId?: SortOrder
    especialidad?: SortOrder
    _count?: DocenteCountOrderByAggregateInput
    _avg?: DocenteAvgOrderByAggregateInput
    _max?: DocenteMaxOrderByAggregateInput
    _min?: DocenteMinOrderByAggregateInput
    _sum?: DocenteSumOrderByAggregateInput
  }

  export type DocenteScalarWhereWithAggregatesInput = {
    AND?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    OR?: DocenteScalarWhereWithAggregatesInput[]
    NOT?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    id_docente?: IntWithAggregatesFilter<"Docente"> | number
    userId?: IntWithAggregatesFilter<"Docente"> | number
    especialidad?: StringWithAggregatesFilter<"Docente"> | string
  }

  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    id_estudiante?: IntFilter<"Estudiante"> | number
    userId?: IntFilter<"Estudiante"> | number
    fecha_nacimiento?: DateTimeFilter<"Estudiante"> | Date | string
    id_carrera?: IntFilter<"Estudiante"> | number
    estado?: StringFilter<"Estudiante"> | string
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materias?: Estudiante_MateriaListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    id_estudiante?: SortOrder
    userId?: SortOrder
    fecha_nacimiento?: SortOrder
    id_carrera?: SortOrder
    estado?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    materias?: Estudiante_MateriaOrderByRelationAggregateInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
    id_estudiante?: number
    userId?: number
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    fecha_nacimiento?: DateTimeFilter<"Estudiante"> | Date | string
    id_carrera?: IntFilter<"Estudiante"> | number
    estado?: StringFilter<"Estudiante"> | string
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materias?: Estudiante_MateriaListRelationFilter
  }, "id_estudiante" | "userId">

  export type EstudianteOrderByWithAggregationInput = {
    id_estudiante?: SortOrder
    userId?: SortOrder
    fecha_nacimiento?: SortOrder
    id_carrera?: SortOrder
    estado?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _avg?: EstudianteAvgOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
    _sum?: EstudianteSumOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    id_estudiante?: IntWithAggregatesFilter<"Estudiante"> | number
    userId?: IntWithAggregatesFilter<"Estudiante"> | number
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"Estudiante"> | Date | string
    id_carrera?: IntWithAggregatesFilter<"Estudiante"> | number
    estado?: StringWithAggregatesFilter<"Estudiante"> | string
  }

  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id_carrera?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    duracion?: IntFilter<"Carrera"> | number
    facultad?: StringFilter<"Carrera"> | string
    ciclos?: CicloListRelationFilter
    estudiantes?: EstudianteListRelationFilter
  }

  export type CarreraOrderByWithRelationInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    facultad?: SortOrder
    ciclos?: CicloOrderByRelationAggregateInput
    estudiantes?: EstudianteOrderByRelationAggregateInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id_carrera?: number
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    nombre?: StringFilter<"Carrera"> | string
    duracion?: IntFilter<"Carrera"> | number
    facultad?: StringFilter<"Carrera"> | string
    ciclos?: CicloListRelationFilter
    estudiantes?: EstudianteListRelationFilter
  }, "id_carrera">

  export type CarreraOrderByWithAggregationInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    facultad?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id_carrera?: IntWithAggregatesFilter<"Carrera"> | number
    nombre?: StringWithAggregatesFilter<"Carrera"> | string
    duracion?: IntWithAggregatesFilter<"Carrera"> | number
    facultad?: StringWithAggregatesFilter<"Carrera"> | string
  }

  export type PeriodoWhereInput = {
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    id_periodo?: IntFilter<"Periodo"> | number
    nombre?: StringFilter<"Periodo"> | string
    activo?: BoolFilter<"Periodo"> | boolean
    docente_materias?: Docente_MateriaListRelationFilter
    estudiante_materias?: Estudiante_MateriaListRelationFilter
  }

  export type PeriodoOrderByWithRelationInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    docente_materias?: Docente_MateriaOrderByRelationAggregateInput
    estudiante_materias?: Estudiante_MateriaOrderByRelationAggregateInput
  }

  export type PeriodoWhereUniqueInput = Prisma.AtLeast<{
    id_periodo?: number
    nombre?: string
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    activo?: BoolFilter<"Periodo"> | boolean
    docente_materias?: Docente_MateriaListRelationFilter
    estudiante_materias?: Estudiante_MateriaListRelationFilter
  }, "id_periodo" | "nombre">

  export type PeriodoOrderByWithAggregationInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    _count?: PeriodoCountOrderByAggregateInput
    _avg?: PeriodoAvgOrderByAggregateInput
    _max?: PeriodoMaxOrderByAggregateInput
    _min?: PeriodoMinOrderByAggregateInput
    _sum?: PeriodoSumOrderByAggregateInput
  }

  export type PeriodoScalarWhereWithAggregatesInput = {
    AND?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    OR?: PeriodoScalarWhereWithAggregatesInput[]
    NOT?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    id_periodo?: IntWithAggregatesFilter<"Periodo"> | number
    nombre?: StringWithAggregatesFilter<"Periodo"> | string
    activo?: BoolWithAggregatesFilter<"Periodo"> | boolean
  }

  export type CicloWhereInput = {
    AND?: CicloWhereInput | CicloWhereInput[]
    OR?: CicloWhereInput[]
    NOT?: CicloWhereInput | CicloWhereInput[]
    id_ciclo?: IntFilter<"Ciclo"> | number
    nombre?: StringFilter<"Ciclo"> | string
    numero?: IntFilter<"Ciclo"> | number
    id_carrera?: IntFilter<"Ciclo"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materias?: MateriaListRelationFilter
  }

  export type CicloOrderByWithRelationInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    numero?: SortOrder
    id_carrera?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    materias?: MateriaOrderByRelationAggregateInput
  }

  export type CicloWhereUniqueInput = Prisma.AtLeast<{
    id_ciclo?: number
    AND?: CicloWhereInput | CicloWhereInput[]
    OR?: CicloWhereInput[]
    NOT?: CicloWhereInput | CicloWhereInput[]
    nombre?: StringFilter<"Ciclo"> | string
    numero?: IntFilter<"Ciclo"> | number
    id_carrera?: IntFilter<"Ciclo"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materias?: MateriaListRelationFilter
  }, "id_ciclo">

  export type CicloOrderByWithAggregationInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    numero?: SortOrder
    id_carrera?: SortOrder
    _count?: CicloCountOrderByAggregateInput
    _avg?: CicloAvgOrderByAggregateInput
    _max?: CicloMaxOrderByAggregateInput
    _min?: CicloMinOrderByAggregateInput
    _sum?: CicloSumOrderByAggregateInput
  }

  export type CicloScalarWhereWithAggregatesInput = {
    AND?: CicloScalarWhereWithAggregatesInput | CicloScalarWhereWithAggregatesInput[]
    OR?: CicloScalarWhereWithAggregatesInput[]
    NOT?: CicloScalarWhereWithAggregatesInput | CicloScalarWhereWithAggregatesInput[]
    id_ciclo?: IntWithAggregatesFilter<"Ciclo"> | number
    nombre?: StringWithAggregatesFilter<"Ciclo"> | string
    numero?: IntWithAggregatesFilter<"Ciclo"> | number
    id_carrera?: IntWithAggregatesFilter<"Ciclo"> | number
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id_materia?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    codigo?: StringFilter<"Materia"> | string
    creditos?: IntFilter<"Materia"> | number
    id_ciclo?: IntFilter<"Materia"> | number
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    docentes?: Docente_MateriaListRelationFilter
    estudiantes?: Estudiante_MateriaListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    creditos?: SortOrder
    id_ciclo?: SortOrder
    ciclo?: CicloOrderByWithRelationInput
    docentes?: Docente_MateriaOrderByRelationAggregateInput
    estudiantes?: Estudiante_MateriaOrderByRelationAggregateInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id_materia?: number
    codigo?: string
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nombre?: StringFilter<"Materia"> | string
    creditos?: IntFilter<"Materia"> | number
    id_ciclo?: IntFilter<"Materia"> | number
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    docentes?: Docente_MateriaListRelationFilter
    estudiantes?: Estudiante_MateriaListRelationFilter
  }, "id_materia" | "codigo">

  export type MateriaOrderByWithAggregationInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    creditos?: SortOrder
    id_ciclo?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id_materia?: IntWithAggregatesFilter<"Materia"> | number
    nombre?: StringWithAggregatesFilter<"Materia"> | string
    codigo?: StringWithAggregatesFilter<"Materia"> | string
    creditos?: IntWithAggregatesFilter<"Materia"> | number
    id_ciclo?: IntWithAggregatesFilter<"Materia"> | number
  }

  export type Docente_MateriaWhereInput = {
    AND?: Docente_MateriaWhereInput | Docente_MateriaWhereInput[]
    OR?: Docente_MateriaWhereInput[]
    NOT?: Docente_MateriaWhereInput | Docente_MateriaWhereInput[]
    id_docente?: IntFilter<"Docente_Materia"> | number
    id_materia?: IntFilter<"Docente_Materia"> | number
    id_periodo?: IntFilter<"Docente_Materia"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }

  export type Docente_MateriaOrderByWithRelationInput = {
    id_docente?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
    docente?: DocenteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
    periodo?: PeriodoOrderByWithRelationInput
  }

  export type Docente_MateriaWhereUniqueInput = Prisma.AtLeast<{
    id_docente_id_materia_id_periodo?: Docente_MateriaId_docenteId_materiaId_periodoCompoundUniqueInput
    AND?: Docente_MateriaWhereInput | Docente_MateriaWhereInput[]
    OR?: Docente_MateriaWhereInput[]
    NOT?: Docente_MateriaWhereInput | Docente_MateriaWhereInput[]
    id_docente?: IntFilter<"Docente_Materia"> | number
    id_materia?: IntFilter<"Docente_Materia"> | number
    id_periodo?: IntFilter<"Docente_Materia"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }, "id_docente_id_materia_id_periodo">

  export type Docente_MateriaOrderByWithAggregationInput = {
    id_docente?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
    _count?: Docente_MateriaCountOrderByAggregateInput
    _avg?: Docente_MateriaAvgOrderByAggregateInput
    _max?: Docente_MateriaMaxOrderByAggregateInput
    _min?: Docente_MateriaMinOrderByAggregateInput
    _sum?: Docente_MateriaSumOrderByAggregateInput
  }

  export type Docente_MateriaScalarWhereWithAggregatesInput = {
    AND?: Docente_MateriaScalarWhereWithAggregatesInput | Docente_MateriaScalarWhereWithAggregatesInput[]
    OR?: Docente_MateriaScalarWhereWithAggregatesInput[]
    NOT?: Docente_MateriaScalarWhereWithAggregatesInput | Docente_MateriaScalarWhereWithAggregatesInput[]
    id_docente?: IntWithAggregatesFilter<"Docente_Materia"> | number
    id_materia?: IntWithAggregatesFilter<"Docente_Materia"> | number
    id_periodo?: IntWithAggregatesFilter<"Docente_Materia"> | number
  }

  export type Estudiante_MateriaWhereInput = {
    AND?: Estudiante_MateriaWhereInput | Estudiante_MateriaWhereInput[]
    OR?: Estudiante_MateriaWhereInput[]
    NOT?: Estudiante_MateriaWhereInput | Estudiante_MateriaWhereInput[]
    id_estudiante?: IntFilter<"Estudiante_Materia"> | number
    id_materia?: IntFilter<"Estudiante_Materia"> | number
    id_periodo?: IntFilter<"Estudiante_Materia"> | number
    fecha_inscripcion?: DateTimeFilter<"Estudiante_Materia"> | Date | string
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }

  export type Estudiante_MateriaOrderByWithRelationInput = {
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
    fecha_inscripcion?: SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
    periodo?: PeriodoOrderByWithRelationInput
  }

  export type Estudiante_MateriaWhereUniqueInput = Prisma.AtLeast<{
    id_estudiante_id_materia_id_periodo?: Estudiante_MateriaId_estudianteId_materiaId_periodoCompoundUniqueInput
    AND?: Estudiante_MateriaWhereInput | Estudiante_MateriaWhereInput[]
    OR?: Estudiante_MateriaWhereInput[]
    NOT?: Estudiante_MateriaWhereInput | Estudiante_MateriaWhereInput[]
    id_estudiante?: IntFilter<"Estudiante_Materia"> | number
    id_materia?: IntFilter<"Estudiante_Materia"> | number
    id_periodo?: IntFilter<"Estudiante_Materia"> | number
    fecha_inscripcion?: DateTimeFilter<"Estudiante_Materia"> | Date | string
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }, "id_estudiante_id_materia_id_periodo">

  export type Estudiante_MateriaOrderByWithAggregationInput = {
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
    fecha_inscripcion?: SortOrder
    _count?: Estudiante_MateriaCountOrderByAggregateInput
    _avg?: Estudiante_MateriaAvgOrderByAggregateInput
    _max?: Estudiante_MateriaMaxOrderByAggregateInput
    _min?: Estudiante_MateriaMinOrderByAggregateInput
    _sum?: Estudiante_MateriaSumOrderByAggregateInput
  }

  export type Estudiante_MateriaScalarWhereWithAggregatesInput = {
    AND?: Estudiante_MateriaScalarWhereWithAggregatesInput | Estudiante_MateriaScalarWhereWithAggregatesInput[]
    OR?: Estudiante_MateriaScalarWhereWithAggregatesInput[]
    NOT?: Estudiante_MateriaScalarWhereWithAggregatesInput | Estudiante_MateriaScalarWhereWithAggregatesInput[]
    id_estudiante?: IntWithAggregatesFilter<"Estudiante_Materia"> | number
    id_materia?: IntWithAggregatesFilter<"Estudiante_Materia"> | number
    id_periodo?: IntWithAggregatesFilter<"Estudiante_Materia"> | number
    fecha_inscripcion?: DateTimeWithAggregatesFilter<"Estudiante_Materia"> | Date | string
  }

  export type AdminCreateInput = {
    userId: number
  }

  export type AdminUncheckedCreateInput = {
    id_admin?: number
    userId: number
  }

  export type AdminUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUncheckedUpdateInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateManyInput = {
    id_admin?: number
    userId: number
  }

  export type AdminUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUncheckedUpdateManyInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCreateInput = {
    userId: number
    especialidad: string
    materias?: Docente_MateriaCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateInput = {
    id_docente?: number
    userId: number
    especialidad: string
    materias?: Docente_MateriaUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    especialidad?: StringFieldUpdateOperationsInput | string
    materias?: Docente_MateriaUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    especialidad?: StringFieldUpdateOperationsInput | string
    materias?: Docente_MateriaUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteCreateManyInput = {
    id_docente?: number
    userId: number
    especialidad: string
  }

  export type DocenteUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    especialidad?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateManyInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    especialidad?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteCreateInput = {
    userId: number
    fecha_nacimiento: Date | string
    estado?: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
    materias?: Estudiante_MateriaCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    id_estudiante?: number
    userId: number
    fecha_nacimiento: Date | string
    id_carrera: number
    estado?: string
    materias?: Estudiante_MateriaUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
    materias?: Estudiante_MateriaUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    materias?: Estudiante_MateriaUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
    id_estudiante?: number
    userId: number
    fecha_nacimiento: Date | string
    id_carrera: number
    estado?: string
  }

  export type EstudianteUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteUncheckedUpdateManyInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraCreateInput = {
    nombre: string
    duracion: number
    facultad: string
    ciclos?: CicloCreateNestedManyWithoutCarreraInput
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    facultad: string
    ciclos?: CicloUncheckedCreateNestedManyWithoutCarreraInput
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
    ciclos?: CicloUpdateManyWithoutCarreraNestedInput
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
    ciclos?: CicloUncheckedUpdateManyWithoutCarreraNestedInput
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    facultad: string
  }

  export type CarreraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraUncheckedUpdateManyInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
  }

  export type PeriodoCreateInput = {
    nombre: string
    activo?: boolean
    docente_materias?: Docente_MateriaCreateNestedManyWithoutPeriodoInput
    estudiante_materias?: Estudiante_MateriaCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateInput = {
    id_periodo?: number
    nombre: string
    activo?: boolean
    docente_materias?: Docente_MateriaUncheckedCreateNestedManyWithoutPeriodoInput
    estudiante_materias?: Estudiante_MateriaUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    docente_materias?: Docente_MateriaUpdateManyWithoutPeriodoNestedInput
    estudiante_materias?: Estudiante_MateriaUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateInput = {
    id_periodo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    docente_materias?: Docente_MateriaUncheckedUpdateManyWithoutPeriodoNestedInput
    estudiante_materias?: Estudiante_MateriaUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoCreateManyInput = {
    id_periodo?: number
    nombre: string
    activo?: boolean
  }

  export type PeriodoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PeriodoUncheckedUpdateManyInput = {
    id_periodo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CicloCreateInput = {
    nombre: string
    numero: number
    carrera: CarreraCreateNestedOneWithoutCiclosInput
    materias?: MateriaCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateInput = {
    id_ciclo?: number
    nombre: string
    numero: number
    id_carrera: number
    materias?: MateriaUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    carrera?: CarreraUpdateOneRequiredWithoutCiclosNestedInput
    materias?: MateriaUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    materias?: MateriaUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type CicloCreateManyInput = {
    id_ciclo?: number
    nombre: string
    numero: number
    id_carrera: number
  }

  export type CicloUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
  }

  export type CicloUncheckedUpdateManyInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaCreateInput = {
    nombre: string
    codigo: string
    creditos: number
    ciclo: CicloCreateNestedOneWithoutMateriasInput
    docentes?: Docente_MateriaCreateNestedManyWithoutMateriaInput
    estudiantes?: Estudiante_MateriaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    id_materia?: number
    nombre: string
    codigo: string
    creditos: number
    id_ciclo: number
    docentes?: Docente_MateriaUncheckedCreateNestedManyWithoutMateriaInput
    estudiantes?: Estudiante_MateriaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    ciclo?: CicloUpdateOneRequiredWithoutMateriasNestedInput
    docentes?: Docente_MateriaUpdateManyWithoutMateriaNestedInput
    estudiantes?: Estudiante_MateriaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    docentes?: Docente_MateriaUncheckedUpdateManyWithoutMateriaNestedInput
    estudiantes?: Estudiante_MateriaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    id_materia?: number
    nombre: string
    codigo: string
    creditos: number
    id_ciclo: number
  }

  export type MateriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaUncheckedUpdateManyInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type Docente_MateriaCreateInput = {
    docente: DocenteCreateNestedOneWithoutMateriasInput
    materia: MateriaCreateNestedOneWithoutDocentesInput
    periodo: PeriodoCreateNestedOneWithoutDocente_materiasInput
  }

  export type Docente_MateriaUncheckedCreateInput = {
    id_docente: number
    id_materia: number
    id_periodo: number
  }

  export type Docente_MateriaUpdateInput = {
    docente?: DocenteUpdateOneRequiredWithoutMateriasNestedInput
    materia?: MateriaUpdateOneRequiredWithoutDocentesNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutDocente_materiasNestedInput
  }

  export type Docente_MateriaUncheckedUpdateInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
  }

  export type Docente_MateriaCreateManyInput = {
    id_docente: number
    id_materia: number
    id_periodo: number
  }

  export type Docente_MateriaUpdateManyMutationInput = {

  }

  export type Docente_MateriaUncheckedUpdateManyInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
  }

  export type Estudiante_MateriaCreateInput = {
    fecha_inscripcion: Date | string
    estudiante: EstudianteCreateNestedOneWithoutMateriasInput
    materia: MateriaCreateNestedOneWithoutEstudiantesInput
    periodo: PeriodoCreateNestedOneWithoutEstudiante_materiasInput
  }

  export type Estudiante_MateriaUncheckedCreateInput = {
    id_estudiante: number
    id_materia: number
    id_periodo: number
    fecha_inscripcion: Date | string
  }

  export type Estudiante_MateriaUpdateInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: EstudianteUpdateOneRequiredWithoutMateriasNestedInput
    materia?: MateriaUpdateOneRequiredWithoutEstudiantesNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutEstudiante_materiasNestedInput
  }

  export type Estudiante_MateriaUncheckedUpdateInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Estudiante_MateriaCreateManyInput = {
    id_estudiante: number
    id_materia: number
    id_periodo: number
    fecha_inscripcion: Date | string
  }

  export type Estudiante_MateriaUpdateManyMutationInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Estudiante_MateriaUncheckedUpdateManyInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AdminCountOrderByAggregateInput = {
    id_admin?: SortOrder
    userId?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id_admin?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id_admin?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id_admin?: SortOrder
    userId?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id_admin?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Docente_MateriaListRelationFilter = {
    every?: Docente_MateriaWhereInput
    some?: Docente_MateriaWhereInput
    none?: Docente_MateriaWhereInput
  }

  export type Docente_MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocenteCountOrderByAggregateInput = {
    id_docente?: SortOrder
    userId?: SortOrder
    especialidad?: SortOrder
  }

  export type DocenteAvgOrderByAggregateInput = {
    id_docente?: SortOrder
    userId?: SortOrder
  }

  export type DocenteMaxOrderByAggregateInput = {
    id_docente?: SortOrder
    userId?: SortOrder
    especialidad?: SortOrder
  }

  export type DocenteMinOrderByAggregateInput = {
    id_docente?: SortOrder
    userId?: SortOrder
    especialidad?: SortOrder
  }

  export type DocenteSumOrderByAggregateInput = {
    id_docente?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type Estudiante_MateriaListRelationFilter = {
    every?: Estudiante_MateriaWhereInput
    some?: Estudiante_MateriaWhereInput
    none?: Estudiante_MateriaWhereInput
  }

  export type Estudiante_MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudianteCountOrderByAggregateInput = {
    id_estudiante?: SortOrder
    userId?: SortOrder
    fecha_nacimiento?: SortOrder
    id_carrera?: SortOrder
    estado?: SortOrder
  }

  export type EstudianteAvgOrderByAggregateInput = {
    id_estudiante?: SortOrder
    userId?: SortOrder
    id_carrera?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
    id_estudiante?: SortOrder
    userId?: SortOrder
    fecha_nacimiento?: SortOrder
    id_carrera?: SortOrder
    estado?: SortOrder
  }

  export type EstudianteMinOrderByAggregateInput = {
    id_estudiante?: SortOrder
    userId?: SortOrder
    fecha_nacimiento?: SortOrder
    id_carrera?: SortOrder
    estado?: SortOrder
  }

  export type EstudianteSumOrderByAggregateInput = {
    id_estudiante?: SortOrder
    userId?: SortOrder
    id_carrera?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CicloListRelationFilter = {
    every?: CicloWhereInput
    some?: CicloWhereInput
    none?: CicloWhereInput
  }

  export type EstudianteListRelationFilter = {
    every?: EstudianteWhereInput
    some?: EstudianteWhereInput
    none?: EstudianteWhereInput
  }

  export type CicloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudianteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraCountOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    facultad?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id_carrera?: SortOrder
    duracion?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    facultad?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    facultad?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
    id_carrera?: SortOrder
    duracion?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PeriodoCountOrderByAggregateInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
  }

  export type PeriodoAvgOrderByAggregateInput = {
    id_periodo?: SortOrder
  }

  export type PeriodoMaxOrderByAggregateInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
  }

  export type PeriodoMinOrderByAggregateInput = {
    id_periodo?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
  }

  export type PeriodoSumOrderByAggregateInput = {
    id_periodo?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CicloCountOrderByAggregateInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    numero?: SortOrder
    id_carrera?: SortOrder
  }

  export type CicloAvgOrderByAggregateInput = {
    id_ciclo?: SortOrder
    numero?: SortOrder
    id_carrera?: SortOrder
  }

  export type CicloMaxOrderByAggregateInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    numero?: SortOrder
    id_carrera?: SortOrder
  }

  export type CicloMinOrderByAggregateInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    numero?: SortOrder
    id_carrera?: SortOrder
  }

  export type CicloSumOrderByAggregateInput = {
    id_ciclo?: SortOrder
    numero?: SortOrder
    id_carrera?: SortOrder
  }

  export type CicloScalarRelationFilter = {
    is?: CicloWhereInput
    isNot?: CicloWhereInput
  }

  export type MateriaCountOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    creditos?: SortOrder
    id_ciclo?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    id_materia?: SortOrder
    creditos?: SortOrder
    id_ciclo?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    creditos?: SortOrder
    id_ciclo?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    creditos?: SortOrder
    id_ciclo?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    id_materia?: SortOrder
    creditos?: SortOrder
    id_ciclo?: SortOrder
  }

  export type DocenteScalarRelationFilter = {
    is?: DocenteWhereInput
    isNot?: DocenteWhereInput
  }

  export type MateriaScalarRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type PeriodoScalarRelationFilter = {
    is?: PeriodoWhereInput
    isNot?: PeriodoWhereInput
  }

  export type Docente_MateriaId_docenteId_materiaId_periodoCompoundUniqueInput = {
    id_docente: number
    id_materia: number
    id_periodo: number
  }

  export type Docente_MateriaCountOrderByAggregateInput = {
    id_docente?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
  }

  export type Docente_MateriaAvgOrderByAggregateInput = {
    id_docente?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
  }

  export type Docente_MateriaMaxOrderByAggregateInput = {
    id_docente?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
  }

  export type Docente_MateriaMinOrderByAggregateInput = {
    id_docente?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
  }

  export type Docente_MateriaSumOrderByAggregateInput = {
    id_docente?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
  }

  export type EstudianteScalarRelationFilter = {
    is?: EstudianteWhereInput
    isNot?: EstudianteWhereInput
  }

  export type Estudiante_MateriaId_estudianteId_materiaId_periodoCompoundUniqueInput = {
    id_estudiante: number
    id_materia: number
    id_periodo: number
  }

  export type Estudiante_MateriaCountOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
    fecha_inscripcion?: SortOrder
  }

  export type Estudiante_MateriaAvgOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
  }

  export type Estudiante_MateriaMaxOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
    fecha_inscripcion?: SortOrder
  }

  export type Estudiante_MateriaMinOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
    fecha_inscripcion?: SortOrder
  }

  export type Estudiante_MateriaSumOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_periodo?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Docente_MateriaCreateNestedManyWithoutDocenteInput = {
    create?: XOR<Docente_MateriaCreateWithoutDocenteInput, Docente_MateriaUncheckedCreateWithoutDocenteInput> | Docente_MateriaCreateWithoutDocenteInput[] | Docente_MateriaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutDocenteInput | Docente_MateriaCreateOrConnectWithoutDocenteInput[]
    createMany?: Docente_MateriaCreateManyDocenteInputEnvelope
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
  }

  export type Docente_MateriaUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<Docente_MateriaCreateWithoutDocenteInput, Docente_MateriaUncheckedCreateWithoutDocenteInput> | Docente_MateriaCreateWithoutDocenteInput[] | Docente_MateriaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutDocenteInput | Docente_MateriaCreateOrConnectWithoutDocenteInput[]
    createMany?: Docente_MateriaCreateManyDocenteInputEnvelope
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Docente_MateriaUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<Docente_MateriaCreateWithoutDocenteInput, Docente_MateriaUncheckedCreateWithoutDocenteInput> | Docente_MateriaCreateWithoutDocenteInput[] | Docente_MateriaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutDocenteInput | Docente_MateriaCreateOrConnectWithoutDocenteInput[]
    upsert?: Docente_MateriaUpsertWithWhereUniqueWithoutDocenteInput | Docente_MateriaUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: Docente_MateriaCreateManyDocenteInputEnvelope
    set?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    disconnect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    delete?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    update?: Docente_MateriaUpdateWithWhereUniqueWithoutDocenteInput | Docente_MateriaUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: Docente_MateriaUpdateManyWithWhereWithoutDocenteInput | Docente_MateriaUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
  }

  export type Docente_MateriaUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<Docente_MateriaCreateWithoutDocenteInput, Docente_MateriaUncheckedCreateWithoutDocenteInput> | Docente_MateriaCreateWithoutDocenteInput[] | Docente_MateriaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutDocenteInput | Docente_MateriaCreateOrConnectWithoutDocenteInput[]
    upsert?: Docente_MateriaUpsertWithWhereUniqueWithoutDocenteInput | Docente_MateriaUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: Docente_MateriaCreateManyDocenteInputEnvelope
    set?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    disconnect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    delete?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    update?: Docente_MateriaUpdateWithWhereUniqueWithoutDocenteInput | Docente_MateriaUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: Docente_MateriaUpdateManyWithWhereWithoutDocenteInput | Docente_MateriaUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
  }

  export type Estudiante_MateriaCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutEstudianteInput, Estudiante_MateriaUncheckedCreateWithoutEstudianteInput> | Estudiante_MateriaCreateWithoutEstudianteInput[] | Estudiante_MateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutEstudianteInput | Estudiante_MateriaCreateOrConnectWithoutEstudianteInput[]
    createMany?: Estudiante_MateriaCreateManyEstudianteInputEnvelope
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
  }

  export type Estudiante_MateriaUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutEstudianteInput, Estudiante_MateriaUncheckedCreateWithoutEstudianteInput> | Estudiante_MateriaCreateWithoutEstudianteInput[] | Estudiante_MateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutEstudianteInput | Estudiante_MateriaCreateOrConnectWithoutEstudianteInput[]
    createMany?: Estudiante_MateriaCreateManyEstudianteInputEnvelope
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarreraUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    upsert?: CarreraUpsertWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutEstudiantesInput, CarreraUpdateWithoutEstudiantesInput>, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type Estudiante_MateriaUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutEstudianteInput, Estudiante_MateriaUncheckedCreateWithoutEstudianteInput> | Estudiante_MateriaCreateWithoutEstudianteInput[] | Estudiante_MateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutEstudianteInput | Estudiante_MateriaCreateOrConnectWithoutEstudianteInput[]
    upsert?: Estudiante_MateriaUpsertWithWhereUniqueWithoutEstudianteInput | Estudiante_MateriaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: Estudiante_MateriaCreateManyEstudianteInputEnvelope
    set?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    disconnect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    delete?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    update?: Estudiante_MateriaUpdateWithWhereUniqueWithoutEstudianteInput | Estudiante_MateriaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: Estudiante_MateriaUpdateManyWithWhereWithoutEstudianteInput | Estudiante_MateriaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
  }

  export type Estudiante_MateriaUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutEstudianteInput, Estudiante_MateriaUncheckedCreateWithoutEstudianteInput> | Estudiante_MateriaCreateWithoutEstudianteInput[] | Estudiante_MateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutEstudianteInput | Estudiante_MateriaCreateOrConnectWithoutEstudianteInput[]
    upsert?: Estudiante_MateriaUpsertWithWhereUniqueWithoutEstudianteInput | Estudiante_MateriaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: Estudiante_MateriaCreateManyEstudianteInputEnvelope
    set?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    disconnect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    delete?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    update?: Estudiante_MateriaUpdateWithWhereUniqueWithoutEstudianteInput | Estudiante_MateriaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: Estudiante_MateriaUpdateManyWithWhereWithoutEstudianteInput | Estudiante_MateriaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
  }

  export type CicloCreateNestedManyWithoutCarreraInput = {
    create?: XOR<CicloCreateWithoutCarreraInput, CicloUncheckedCreateWithoutCarreraInput> | CicloCreateWithoutCarreraInput[] | CicloUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutCarreraInput | CicloCreateOrConnectWithoutCarreraInput[]
    createMany?: CicloCreateManyCarreraInputEnvelope
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
  }

  export type EstudianteCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type CicloUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<CicloCreateWithoutCarreraInput, CicloUncheckedCreateWithoutCarreraInput> | CicloCreateWithoutCarreraInput[] | CicloUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutCarreraInput | CicloCreateOrConnectWithoutCarreraInput[]
    createMany?: CicloCreateManyCarreraInputEnvelope
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
  }

  export type EstudianteUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type CicloUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<CicloCreateWithoutCarreraInput, CicloUncheckedCreateWithoutCarreraInput> | CicloCreateWithoutCarreraInput[] | CicloUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutCarreraInput | CicloCreateOrConnectWithoutCarreraInput[]
    upsert?: CicloUpsertWithWhereUniqueWithoutCarreraInput | CicloUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: CicloCreateManyCarreraInputEnvelope
    set?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    disconnect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    delete?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    update?: CicloUpdateWithWhereUniqueWithoutCarreraInput | CicloUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: CicloUpdateManyWithWhereWithoutCarreraInput | CicloUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: CicloScalarWhereInput | CicloScalarWhereInput[]
  }

  export type EstudianteUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type CicloUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<CicloCreateWithoutCarreraInput, CicloUncheckedCreateWithoutCarreraInput> | CicloCreateWithoutCarreraInput[] | CicloUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutCarreraInput | CicloCreateOrConnectWithoutCarreraInput[]
    upsert?: CicloUpsertWithWhereUniqueWithoutCarreraInput | CicloUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: CicloCreateManyCarreraInputEnvelope
    set?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    disconnect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    delete?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    update?: CicloUpdateWithWhereUniqueWithoutCarreraInput | CicloUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: CicloUpdateManyWithWhereWithoutCarreraInput | CicloUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: CicloScalarWhereInput | CicloScalarWhereInput[]
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type Docente_MateriaCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<Docente_MateriaCreateWithoutPeriodoInput, Docente_MateriaUncheckedCreateWithoutPeriodoInput> | Docente_MateriaCreateWithoutPeriodoInput[] | Docente_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutPeriodoInput | Docente_MateriaCreateOrConnectWithoutPeriodoInput[]
    createMany?: Docente_MateriaCreateManyPeriodoInputEnvelope
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
  }

  export type Estudiante_MateriaCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutPeriodoInput, Estudiante_MateriaUncheckedCreateWithoutPeriodoInput> | Estudiante_MateriaCreateWithoutPeriodoInput[] | Estudiante_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutPeriodoInput | Estudiante_MateriaCreateOrConnectWithoutPeriodoInput[]
    createMany?: Estudiante_MateriaCreateManyPeriodoInputEnvelope
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
  }

  export type Docente_MateriaUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<Docente_MateriaCreateWithoutPeriodoInput, Docente_MateriaUncheckedCreateWithoutPeriodoInput> | Docente_MateriaCreateWithoutPeriodoInput[] | Docente_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutPeriodoInput | Docente_MateriaCreateOrConnectWithoutPeriodoInput[]
    createMany?: Docente_MateriaCreateManyPeriodoInputEnvelope
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
  }

  export type Estudiante_MateriaUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutPeriodoInput, Estudiante_MateriaUncheckedCreateWithoutPeriodoInput> | Estudiante_MateriaCreateWithoutPeriodoInput[] | Estudiante_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutPeriodoInput | Estudiante_MateriaCreateOrConnectWithoutPeriodoInput[]
    createMany?: Estudiante_MateriaCreateManyPeriodoInputEnvelope
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Docente_MateriaUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<Docente_MateriaCreateWithoutPeriodoInput, Docente_MateriaUncheckedCreateWithoutPeriodoInput> | Docente_MateriaCreateWithoutPeriodoInput[] | Docente_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutPeriodoInput | Docente_MateriaCreateOrConnectWithoutPeriodoInput[]
    upsert?: Docente_MateriaUpsertWithWhereUniqueWithoutPeriodoInput | Docente_MateriaUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: Docente_MateriaCreateManyPeriodoInputEnvelope
    set?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    disconnect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    delete?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    update?: Docente_MateriaUpdateWithWhereUniqueWithoutPeriodoInput | Docente_MateriaUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: Docente_MateriaUpdateManyWithWhereWithoutPeriodoInput | Docente_MateriaUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
  }

  export type Estudiante_MateriaUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutPeriodoInput, Estudiante_MateriaUncheckedCreateWithoutPeriodoInput> | Estudiante_MateriaCreateWithoutPeriodoInput[] | Estudiante_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutPeriodoInput | Estudiante_MateriaCreateOrConnectWithoutPeriodoInput[]
    upsert?: Estudiante_MateriaUpsertWithWhereUniqueWithoutPeriodoInput | Estudiante_MateriaUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: Estudiante_MateriaCreateManyPeriodoInputEnvelope
    set?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    disconnect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    delete?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    update?: Estudiante_MateriaUpdateWithWhereUniqueWithoutPeriodoInput | Estudiante_MateriaUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: Estudiante_MateriaUpdateManyWithWhereWithoutPeriodoInput | Estudiante_MateriaUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
  }

  export type Docente_MateriaUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<Docente_MateriaCreateWithoutPeriodoInput, Docente_MateriaUncheckedCreateWithoutPeriodoInput> | Docente_MateriaCreateWithoutPeriodoInput[] | Docente_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutPeriodoInput | Docente_MateriaCreateOrConnectWithoutPeriodoInput[]
    upsert?: Docente_MateriaUpsertWithWhereUniqueWithoutPeriodoInput | Docente_MateriaUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: Docente_MateriaCreateManyPeriodoInputEnvelope
    set?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    disconnect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    delete?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    update?: Docente_MateriaUpdateWithWhereUniqueWithoutPeriodoInput | Docente_MateriaUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: Docente_MateriaUpdateManyWithWhereWithoutPeriodoInput | Docente_MateriaUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
  }

  export type Estudiante_MateriaUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutPeriodoInput, Estudiante_MateriaUncheckedCreateWithoutPeriodoInput> | Estudiante_MateriaCreateWithoutPeriodoInput[] | Estudiante_MateriaUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutPeriodoInput | Estudiante_MateriaCreateOrConnectWithoutPeriodoInput[]
    upsert?: Estudiante_MateriaUpsertWithWhereUniqueWithoutPeriodoInput | Estudiante_MateriaUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: Estudiante_MateriaCreateManyPeriodoInputEnvelope
    set?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    disconnect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    delete?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    update?: Estudiante_MateriaUpdateWithWhereUniqueWithoutPeriodoInput | Estudiante_MateriaUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: Estudiante_MateriaUpdateManyWithWhereWithoutPeriodoInput | Estudiante_MateriaUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutCiclosInput = {
    create?: XOR<CarreraCreateWithoutCiclosInput, CarreraUncheckedCreateWithoutCiclosInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutCiclosInput
    connect?: CarreraWhereUniqueInput
  }

  export type MateriaCreateNestedManyWithoutCicloInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCicloInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type CarreraUpdateOneRequiredWithoutCiclosNestedInput = {
    create?: XOR<CarreraCreateWithoutCiclosInput, CarreraUncheckedCreateWithoutCiclosInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutCiclosInput
    upsert?: CarreraUpsertWithoutCiclosInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutCiclosInput, CarreraUpdateWithoutCiclosInput>, CarreraUncheckedUpdateWithoutCiclosInput>
  }

  export type MateriaUpdateManyWithoutCicloNestedInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCicloInput | MateriaUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCicloInput | MateriaUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCicloInput | MateriaUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutCicloNestedInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCicloInput | MateriaUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCicloInput | MateriaUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCicloInput | MateriaUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type CicloCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CicloCreateOrConnectWithoutMateriasInput
    connect?: CicloWhereUniqueInput
  }

  export type Docente_MateriaCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Docente_MateriaCreateWithoutMateriaInput, Docente_MateriaUncheckedCreateWithoutMateriaInput> | Docente_MateriaCreateWithoutMateriaInput[] | Docente_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutMateriaInput | Docente_MateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: Docente_MateriaCreateManyMateriaInputEnvelope
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
  }

  export type Estudiante_MateriaCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutMateriaInput, Estudiante_MateriaUncheckedCreateWithoutMateriaInput> | Estudiante_MateriaCreateWithoutMateriaInput[] | Estudiante_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutMateriaInput | Estudiante_MateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: Estudiante_MateriaCreateManyMateriaInputEnvelope
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
  }

  export type Docente_MateriaUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Docente_MateriaCreateWithoutMateriaInput, Docente_MateriaUncheckedCreateWithoutMateriaInput> | Docente_MateriaCreateWithoutMateriaInput[] | Docente_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutMateriaInput | Docente_MateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: Docente_MateriaCreateManyMateriaInputEnvelope
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
  }

  export type Estudiante_MateriaUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutMateriaInput, Estudiante_MateriaUncheckedCreateWithoutMateriaInput> | Estudiante_MateriaCreateWithoutMateriaInput[] | Estudiante_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutMateriaInput | Estudiante_MateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: Estudiante_MateriaCreateManyMateriaInputEnvelope
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
  }

  export type CicloUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CicloCreateOrConnectWithoutMateriasInput
    upsert?: CicloUpsertWithoutMateriasInput
    connect?: CicloWhereUniqueInput
    update?: XOR<XOR<CicloUpdateToOneWithWhereWithoutMateriasInput, CicloUpdateWithoutMateriasInput>, CicloUncheckedUpdateWithoutMateriasInput>
  }

  export type Docente_MateriaUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Docente_MateriaCreateWithoutMateriaInput, Docente_MateriaUncheckedCreateWithoutMateriaInput> | Docente_MateriaCreateWithoutMateriaInput[] | Docente_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutMateriaInput | Docente_MateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: Docente_MateriaUpsertWithWhereUniqueWithoutMateriaInput | Docente_MateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Docente_MateriaCreateManyMateriaInputEnvelope
    set?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    disconnect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    delete?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    update?: Docente_MateriaUpdateWithWhereUniqueWithoutMateriaInput | Docente_MateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Docente_MateriaUpdateManyWithWhereWithoutMateriaInput | Docente_MateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
  }

  export type Estudiante_MateriaUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutMateriaInput, Estudiante_MateriaUncheckedCreateWithoutMateriaInput> | Estudiante_MateriaCreateWithoutMateriaInput[] | Estudiante_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutMateriaInput | Estudiante_MateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: Estudiante_MateriaUpsertWithWhereUniqueWithoutMateriaInput | Estudiante_MateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Estudiante_MateriaCreateManyMateriaInputEnvelope
    set?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    disconnect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    delete?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    update?: Estudiante_MateriaUpdateWithWhereUniqueWithoutMateriaInput | Estudiante_MateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Estudiante_MateriaUpdateManyWithWhereWithoutMateriaInput | Estudiante_MateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
  }

  export type Docente_MateriaUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Docente_MateriaCreateWithoutMateriaInput, Docente_MateriaUncheckedCreateWithoutMateriaInput> | Docente_MateriaCreateWithoutMateriaInput[] | Docente_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Docente_MateriaCreateOrConnectWithoutMateriaInput | Docente_MateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: Docente_MateriaUpsertWithWhereUniqueWithoutMateriaInput | Docente_MateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Docente_MateriaCreateManyMateriaInputEnvelope
    set?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    disconnect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    delete?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    connect?: Docente_MateriaWhereUniqueInput | Docente_MateriaWhereUniqueInput[]
    update?: Docente_MateriaUpdateWithWhereUniqueWithoutMateriaInput | Docente_MateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Docente_MateriaUpdateManyWithWhereWithoutMateriaInput | Docente_MateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
  }

  export type Estudiante_MateriaUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Estudiante_MateriaCreateWithoutMateriaInput, Estudiante_MateriaUncheckedCreateWithoutMateriaInput> | Estudiante_MateriaCreateWithoutMateriaInput[] | Estudiante_MateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Estudiante_MateriaCreateOrConnectWithoutMateriaInput | Estudiante_MateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: Estudiante_MateriaUpsertWithWhereUniqueWithoutMateriaInput | Estudiante_MateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Estudiante_MateriaCreateManyMateriaInputEnvelope
    set?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    disconnect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    delete?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    connect?: Estudiante_MateriaWhereUniqueInput | Estudiante_MateriaWhereUniqueInput[]
    update?: Estudiante_MateriaUpdateWithWhereUniqueWithoutMateriaInput | Estudiante_MateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Estudiante_MateriaUpdateManyWithWhereWithoutMateriaInput | Estudiante_MateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
  }

  export type DocenteCreateNestedOneWithoutMateriasInput = {
    create?: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutMateriasInput
    connect?: DocenteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutDocentesInput = {
    create?: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDocentesInput
    connect?: MateriaWhereUniqueInput
  }

  export type PeriodoCreateNestedOneWithoutDocente_materiasInput = {
    create?: XOR<PeriodoCreateWithoutDocente_materiasInput, PeriodoUncheckedCreateWithoutDocente_materiasInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutDocente_materiasInput
    connect?: PeriodoWhereUniqueInput
  }

  export type DocenteUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutMateriasInput
    upsert?: DocenteUpsertWithoutMateriasInput
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutMateriasInput, DocenteUpdateWithoutMateriasInput>, DocenteUncheckedUpdateWithoutMateriasInput>
  }

  export type MateriaUpdateOneRequiredWithoutDocentesNestedInput = {
    create?: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDocentesInput
    upsert?: MateriaUpsertWithoutDocentesInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutDocentesInput, MateriaUpdateWithoutDocentesInput>, MateriaUncheckedUpdateWithoutDocentesInput>
  }

  export type PeriodoUpdateOneRequiredWithoutDocente_materiasNestedInput = {
    create?: XOR<PeriodoCreateWithoutDocente_materiasInput, PeriodoUncheckedCreateWithoutDocente_materiasInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutDocente_materiasInput
    upsert?: PeriodoUpsertWithoutDocente_materiasInput
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutDocente_materiasInput, PeriodoUpdateWithoutDocente_materiasInput>, PeriodoUncheckedUpdateWithoutDocente_materiasInput>
  }

  export type EstudianteCreateNestedOneWithoutMateriasInput = {
    create?: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutMateriasInput
    connect?: EstudianteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutEstudiantesInput
    connect?: MateriaWhereUniqueInput
  }

  export type PeriodoCreateNestedOneWithoutEstudiante_materiasInput = {
    create?: XOR<PeriodoCreateWithoutEstudiante_materiasInput, PeriodoUncheckedCreateWithoutEstudiante_materiasInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutEstudiante_materiasInput
    connect?: PeriodoWhereUniqueInput
  }

  export type EstudianteUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutMateriasInput
    upsert?: EstudianteUpsertWithoutMateriasInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutMateriasInput, EstudianteUpdateWithoutMateriasInput>, EstudianteUncheckedUpdateWithoutMateriasInput>
  }

  export type MateriaUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutEstudiantesInput
    upsert?: MateriaUpsertWithoutEstudiantesInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutEstudiantesInput, MateriaUpdateWithoutEstudiantesInput>, MateriaUncheckedUpdateWithoutEstudiantesInput>
  }

  export type PeriodoUpdateOneRequiredWithoutEstudiante_materiasNestedInput = {
    create?: XOR<PeriodoCreateWithoutEstudiante_materiasInput, PeriodoUncheckedCreateWithoutEstudiante_materiasInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutEstudiante_materiasInput
    upsert?: PeriodoUpsertWithoutEstudiante_materiasInput
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutEstudiante_materiasInput, PeriodoUpdateWithoutEstudiante_materiasInput>, PeriodoUncheckedUpdateWithoutEstudiante_materiasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Docente_MateriaCreateWithoutDocenteInput = {
    materia: MateriaCreateNestedOneWithoutDocentesInput
    periodo: PeriodoCreateNestedOneWithoutDocente_materiasInput
  }

  export type Docente_MateriaUncheckedCreateWithoutDocenteInput = {
    id_materia: number
    id_periodo: number
  }

  export type Docente_MateriaCreateOrConnectWithoutDocenteInput = {
    where: Docente_MateriaWhereUniqueInput
    create: XOR<Docente_MateriaCreateWithoutDocenteInput, Docente_MateriaUncheckedCreateWithoutDocenteInput>
  }

  export type Docente_MateriaCreateManyDocenteInputEnvelope = {
    data: Docente_MateriaCreateManyDocenteInput | Docente_MateriaCreateManyDocenteInput[]
    skipDuplicates?: boolean
  }

  export type Docente_MateriaUpsertWithWhereUniqueWithoutDocenteInput = {
    where: Docente_MateriaWhereUniqueInput
    update: XOR<Docente_MateriaUpdateWithoutDocenteInput, Docente_MateriaUncheckedUpdateWithoutDocenteInput>
    create: XOR<Docente_MateriaCreateWithoutDocenteInput, Docente_MateriaUncheckedCreateWithoutDocenteInput>
  }

  export type Docente_MateriaUpdateWithWhereUniqueWithoutDocenteInput = {
    where: Docente_MateriaWhereUniqueInput
    data: XOR<Docente_MateriaUpdateWithoutDocenteInput, Docente_MateriaUncheckedUpdateWithoutDocenteInput>
  }

  export type Docente_MateriaUpdateManyWithWhereWithoutDocenteInput = {
    where: Docente_MateriaScalarWhereInput
    data: XOR<Docente_MateriaUpdateManyMutationInput, Docente_MateriaUncheckedUpdateManyWithoutDocenteInput>
  }

  export type Docente_MateriaScalarWhereInput = {
    AND?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
    OR?: Docente_MateriaScalarWhereInput[]
    NOT?: Docente_MateriaScalarWhereInput | Docente_MateriaScalarWhereInput[]
    id_docente?: IntFilter<"Docente_Materia"> | number
    id_materia?: IntFilter<"Docente_Materia"> | number
    id_periodo?: IntFilter<"Docente_Materia"> | number
  }

  export type CarreraCreateWithoutEstudiantesInput = {
    nombre: string
    duracion: number
    facultad: string
    ciclos?: CicloCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutEstudiantesInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    facultad: string
    ciclos?: CicloUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutEstudiantesInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
  }

  export type Estudiante_MateriaCreateWithoutEstudianteInput = {
    fecha_inscripcion: Date | string
    materia: MateriaCreateNestedOneWithoutEstudiantesInput
    periodo: PeriodoCreateNestedOneWithoutEstudiante_materiasInput
  }

  export type Estudiante_MateriaUncheckedCreateWithoutEstudianteInput = {
    id_materia: number
    id_periodo: number
    fecha_inscripcion: Date | string
  }

  export type Estudiante_MateriaCreateOrConnectWithoutEstudianteInput = {
    where: Estudiante_MateriaWhereUniqueInput
    create: XOR<Estudiante_MateriaCreateWithoutEstudianteInput, Estudiante_MateriaUncheckedCreateWithoutEstudianteInput>
  }

  export type Estudiante_MateriaCreateManyEstudianteInputEnvelope = {
    data: Estudiante_MateriaCreateManyEstudianteInput | Estudiante_MateriaCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithoutEstudiantesInput = {
    update: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type CarreraUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
    ciclos?: CicloUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutEstudiantesInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
    ciclos?: CicloUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type Estudiante_MateriaUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: Estudiante_MateriaWhereUniqueInput
    update: XOR<Estudiante_MateriaUpdateWithoutEstudianteInput, Estudiante_MateriaUncheckedUpdateWithoutEstudianteInput>
    create: XOR<Estudiante_MateriaCreateWithoutEstudianteInput, Estudiante_MateriaUncheckedCreateWithoutEstudianteInput>
  }

  export type Estudiante_MateriaUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: Estudiante_MateriaWhereUniqueInput
    data: XOR<Estudiante_MateriaUpdateWithoutEstudianteInput, Estudiante_MateriaUncheckedUpdateWithoutEstudianteInput>
  }

  export type Estudiante_MateriaUpdateManyWithWhereWithoutEstudianteInput = {
    where: Estudiante_MateriaScalarWhereInput
    data: XOR<Estudiante_MateriaUpdateManyMutationInput, Estudiante_MateriaUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type Estudiante_MateriaScalarWhereInput = {
    AND?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
    OR?: Estudiante_MateriaScalarWhereInput[]
    NOT?: Estudiante_MateriaScalarWhereInput | Estudiante_MateriaScalarWhereInput[]
    id_estudiante?: IntFilter<"Estudiante_Materia"> | number
    id_materia?: IntFilter<"Estudiante_Materia"> | number
    id_periodo?: IntFilter<"Estudiante_Materia"> | number
    fecha_inscripcion?: DateTimeFilter<"Estudiante_Materia"> | Date | string
  }

  export type CicloCreateWithoutCarreraInput = {
    nombre: string
    numero: number
    materias?: MateriaCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateWithoutCarreraInput = {
    id_ciclo?: number
    nombre: string
    numero: number
    materias?: MateriaUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloCreateOrConnectWithoutCarreraInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutCarreraInput, CicloUncheckedCreateWithoutCarreraInput>
  }

  export type CicloCreateManyCarreraInputEnvelope = {
    data: CicloCreateManyCarreraInput | CicloCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type EstudianteCreateWithoutCarreraInput = {
    userId: number
    fecha_nacimiento: Date | string
    estado?: string
    materias?: Estudiante_MateriaCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutCarreraInput = {
    id_estudiante?: number
    userId: number
    fecha_nacimiento: Date | string
    estado?: string
    materias?: Estudiante_MateriaUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteCreateManyCarreraInputEnvelope = {
    data: EstudianteCreateManyCarreraInput | EstudianteCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type CicloUpsertWithWhereUniqueWithoutCarreraInput = {
    where: CicloWhereUniqueInput
    update: XOR<CicloUpdateWithoutCarreraInput, CicloUncheckedUpdateWithoutCarreraInput>
    create: XOR<CicloCreateWithoutCarreraInput, CicloUncheckedCreateWithoutCarreraInput>
  }

  export type CicloUpdateWithWhereUniqueWithoutCarreraInput = {
    where: CicloWhereUniqueInput
    data: XOR<CicloUpdateWithoutCarreraInput, CicloUncheckedUpdateWithoutCarreraInput>
  }

  export type CicloUpdateManyWithWhereWithoutCarreraInput = {
    where: CicloScalarWhereInput
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyWithoutCarreraInput>
  }

  export type CicloScalarWhereInput = {
    AND?: CicloScalarWhereInput | CicloScalarWhereInput[]
    OR?: CicloScalarWhereInput[]
    NOT?: CicloScalarWhereInput | CicloScalarWhereInput[]
    id_ciclo?: IntFilter<"Ciclo"> | number
    nombre?: StringFilter<"Ciclo"> | string
    numero?: IntFilter<"Ciclo"> | number
    id_carrera?: IntFilter<"Ciclo"> | number
  }

  export type EstudianteUpsertWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    update: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteUpdateWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    data: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
  }

  export type EstudianteUpdateManyWithWhereWithoutCarreraInput = {
    where: EstudianteScalarWhereInput
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyWithoutCarreraInput>
  }

  export type EstudianteScalarWhereInput = {
    AND?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    OR?: EstudianteScalarWhereInput[]
    NOT?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    id_estudiante?: IntFilter<"Estudiante"> | number
    userId?: IntFilter<"Estudiante"> | number
    fecha_nacimiento?: DateTimeFilter<"Estudiante"> | Date | string
    id_carrera?: IntFilter<"Estudiante"> | number
    estado?: StringFilter<"Estudiante"> | string
  }

  export type Docente_MateriaCreateWithoutPeriodoInput = {
    docente: DocenteCreateNestedOneWithoutMateriasInput
    materia: MateriaCreateNestedOneWithoutDocentesInput
  }

  export type Docente_MateriaUncheckedCreateWithoutPeriodoInput = {
    id_docente: number
    id_materia: number
  }

  export type Docente_MateriaCreateOrConnectWithoutPeriodoInput = {
    where: Docente_MateriaWhereUniqueInput
    create: XOR<Docente_MateriaCreateWithoutPeriodoInput, Docente_MateriaUncheckedCreateWithoutPeriodoInput>
  }

  export type Docente_MateriaCreateManyPeriodoInputEnvelope = {
    data: Docente_MateriaCreateManyPeriodoInput | Docente_MateriaCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type Estudiante_MateriaCreateWithoutPeriodoInput = {
    fecha_inscripcion: Date | string
    estudiante: EstudianteCreateNestedOneWithoutMateriasInput
    materia: MateriaCreateNestedOneWithoutEstudiantesInput
  }

  export type Estudiante_MateriaUncheckedCreateWithoutPeriodoInput = {
    id_estudiante: number
    id_materia: number
    fecha_inscripcion: Date | string
  }

  export type Estudiante_MateriaCreateOrConnectWithoutPeriodoInput = {
    where: Estudiante_MateriaWhereUniqueInput
    create: XOR<Estudiante_MateriaCreateWithoutPeriodoInput, Estudiante_MateriaUncheckedCreateWithoutPeriodoInput>
  }

  export type Estudiante_MateriaCreateManyPeriodoInputEnvelope = {
    data: Estudiante_MateriaCreateManyPeriodoInput | Estudiante_MateriaCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type Docente_MateriaUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: Docente_MateriaWhereUniqueInput
    update: XOR<Docente_MateriaUpdateWithoutPeriodoInput, Docente_MateriaUncheckedUpdateWithoutPeriodoInput>
    create: XOR<Docente_MateriaCreateWithoutPeriodoInput, Docente_MateriaUncheckedCreateWithoutPeriodoInput>
  }

  export type Docente_MateriaUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: Docente_MateriaWhereUniqueInput
    data: XOR<Docente_MateriaUpdateWithoutPeriodoInput, Docente_MateriaUncheckedUpdateWithoutPeriodoInput>
  }

  export type Docente_MateriaUpdateManyWithWhereWithoutPeriodoInput = {
    where: Docente_MateriaScalarWhereInput
    data: XOR<Docente_MateriaUpdateManyMutationInput, Docente_MateriaUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type Estudiante_MateriaUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: Estudiante_MateriaWhereUniqueInput
    update: XOR<Estudiante_MateriaUpdateWithoutPeriodoInput, Estudiante_MateriaUncheckedUpdateWithoutPeriodoInput>
    create: XOR<Estudiante_MateriaCreateWithoutPeriodoInput, Estudiante_MateriaUncheckedCreateWithoutPeriodoInput>
  }

  export type Estudiante_MateriaUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: Estudiante_MateriaWhereUniqueInput
    data: XOR<Estudiante_MateriaUpdateWithoutPeriodoInput, Estudiante_MateriaUncheckedUpdateWithoutPeriodoInput>
  }

  export type Estudiante_MateriaUpdateManyWithWhereWithoutPeriodoInput = {
    where: Estudiante_MateriaScalarWhereInput
    data: XOR<Estudiante_MateriaUpdateManyMutationInput, Estudiante_MateriaUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type CarreraCreateWithoutCiclosInput = {
    nombre: string
    duracion: number
    facultad: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutCiclosInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    facultad: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutCiclosInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutCiclosInput, CarreraUncheckedCreateWithoutCiclosInput>
  }

  export type MateriaCreateWithoutCicloInput = {
    nombre: string
    codigo: string
    creditos: number
    docentes?: Docente_MateriaCreateNestedManyWithoutMateriaInput
    estudiantes?: Estudiante_MateriaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutCicloInput = {
    id_materia?: number
    nombre: string
    codigo: string
    creditos: number
    docentes?: Docente_MateriaUncheckedCreateNestedManyWithoutMateriaInput
    estudiantes?: Estudiante_MateriaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutCicloInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput>
  }

  export type MateriaCreateManyCicloInputEnvelope = {
    data: MateriaCreateManyCicloInput | MateriaCreateManyCicloInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithoutCiclosInput = {
    update: XOR<CarreraUpdateWithoutCiclosInput, CarreraUncheckedUpdateWithoutCiclosInput>
    create: XOR<CarreraCreateWithoutCiclosInput, CarreraUncheckedCreateWithoutCiclosInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutCiclosInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutCiclosInput, CarreraUncheckedUpdateWithoutCiclosInput>
  }

  export type CarreraUpdateWithoutCiclosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutCiclosInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type MateriaUpsertWithWhereUniqueWithoutCicloInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCicloInput, MateriaUncheckedUpdateWithoutCicloInput>
    create: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCicloInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCicloInput, MateriaUncheckedUpdateWithoutCicloInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCicloInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCicloInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id_materia?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    codigo?: StringFilter<"Materia"> | string
    creditos?: IntFilter<"Materia"> | number
    id_ciclo?: IntFilter<"Materia"> | number
  }

  export type CicloCreateWithoutMateriasInput = {
    nombre: string
    numero: number
    carrera: CarreraCreateNestedOneWithoutCiclosInput
  }

  export type CicloUncheckedCreateWithoutMateriasInput = {
    id_ciclo?: number
    nombre: string
    numero: number
    id_carrera: number
  }

  export type CicloCreateOrConnectWithoutMateriasInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
  }

  export type Docente_MateriaCreateWithoutMateriaInput = {
    docente: DocenteCreateNestedOneWithoutMateriasInput
    periodo: PeriodoCreateNestedOneWithoutDocente_materiasInput
  }

  export type Docente_MateriaUncheckedCreateWithoutMateriaInput = {
    id_docente: number
    id_periodo: number
  }

  export type Docente_MateriaCreateOrConnectWithoutMateriaInput = {
    where: Docente_MateriaWhereUniqueInput
    create: XOR<Docente_MateriaCreateWithoutMateriaInput, Docente_MateriaUncheckedCreateWithoutMateriaInput>
  }

  export type Docente_MateriaCreateManyMateriaInputEnvelope = {
    data: Docente_MateriaCreateManyMateriaInput | Docente_MateriaCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type Estudiante_MateriaCreateWithoutMateriaInput = {
    fecha_inscripcion: Date | string
    estudiante: EstudianteCreateNestedOneWithoutMateriasInput
    periodo: PeriodoCreateNestedOneWithoutEstudiante_materiasInput
  }

  export type Estudiante_MateriaUncheckedCreateWithoutMateriaInput = {
    id_estudiante: number
    id_periodo: number
    fecha_inscripcion: Date | string
  }

  export type Estudiante_MateriaCreateOrConnectWithoutMateriaInput = {
    where: Estudiante_MateriaWhereUniqueInput
    create: XOR<Estudiante_MateriaCreateWithoutMateriaInput, Estudiante_MateriaUncheckedCreateWithoutMateriaInput>
  }

  export type Estudiante_MateriaCreateManyMateriaInputEnvelope = {
    data: Estudiante_MateriaCreateManyMateriaInput | Estudiante_MateriaCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type CicloUpsertWithoutMateriasInput = {
    update: XOR<CicloUpdateWithoutMateriasInput, CicloUncheckedUpdateWithoutMateriasInput>
    create: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
    where?: CicloWhereInput
  }

  export type CicloUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CicloWhereInput
    data: XOR<CicloUpdateWithoutMateriasInput, CicloUncheckedUpdateWithoutMateriasInput>
  }

  export type CicloUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    carrera?: CarreraUpdateOneRequiredWithoutCiclosNestedInput
  }

  export type CicloUncheckedUpdateWithoutMateriasInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
  }

  export type Docente_MateriaUpsertWithWhereUniqueWithoutMateriaInput = {
    where: Docente_MateriaWhereUniqueInput
    update: XOR<Docente_MateriaUpdateWithoutMateriaInput, Docente_MateriaUncheckedUpdateWithoutMateriaInput>
    create: XOR<Docente_MateriaCreateWithoutMateriaInput, Docente_MateriaUncheckedCreateWithoutMateriaInput>
  }

  export type Docente_MateriaUpdateWithWhereUniqueWithoutMateriaInput = {
    where: Docente_MateriaWhereUniqueInput
    data: XOR<Docente_MateriaUpdateWithoutMateriaInput, Docente_MateriaUncheckedUpdateWithoutMateriaInput>
  }

  export type Docente_MateriaUpdateManyWithWhereWithoutMateriaInput = {
    where: Docente_MateriaScalarWhereInput
    data: XOR<Docente_MateriaUpdateManyMutationInput, Docente_MateriaUncheckedUpdateManyWithoutMateriaInput>
  }

  export type Estudiante_MateriaUpsertWithWhereUniqueWithoutMateriaInput = {
    where: Estudiante_MateriaWhereUniqueInput
    update: XOR<Estudiante_MateriaUpdateWithoutMateriaInput, Estudiante_MateriaUncheckedUpdateWithoutMateriaInput>
    create: XOR<Estudiante_MateriaCreateWithoutMateriaInput, Estudiante_MateriaUncheckedCreateWithoutMateriaInput>
  }

  export type Estudiante_MateriaUpdateWithWhereUniqueWithoutMateriaInput = {
    where: Estudiante_MateriaWhereUniqueInput
    data: XOR<Estudiante_MateriaUpdateWithoutMateriaInput, Estudiante_MateriaUncheckedUpdateWithoutMateriaInput>
  }

  export type Estudiante_MateriaUpdateManyWithWhereWithoutMateriaInput = {
    where: Estudiante_MateriaScalarWhereInput
    data: XOR<Estudiante_MateriaUpdateManyMutationInput, Estudiante_MateriaUncheckedUpdateManyWithoutMateriaInput>
  }

  export type DocenteCreateWithoutMateriasInput = {
    userId: number
    especialidad: string
  }

  export type DocenteUncheckedCreateWithoutMateriasInput = {
    id_docente?: number
    userId: number
    especialidad: string
  }

  export type DocenteCreateOrConnectWithoutMateriasInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
  }

  export type MateriaCreateWithoutDocentesInput = {
    nombre: string
    codigo: string
    creditos: number
    ciclo: CicloCreateNestedOneWithoutMateriasInput
    estudiantes?: Estudiante_MateriaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutDocentesInput = {
    id_materia?: number
    nombre: string
    codigo: string
    creditos: number
    id_ciclo: number
    estudiantes?: Estudiante_MateriaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutDocentesInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
  }

  export type PeriodoCreateWithoutDocente_materiasInput = {
    nombre: string
    activo?: boolean
    estudiante_materias?: Estudiante_MateriaCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateWithoutDocente_materiasInput = {
    id_periodo?: number
    nombre: string
    activo?: boolean
    estudiante_materias?: Estudiante_MateriaUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoCreateOrConnectWithoutDocente_materiasInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutDocente_materiasInput, PeriodoUncheckedCreateWithoutDocente_materiasInput>
  }

  export type DocenteUpsertWithoutMateriasInput = {
    update: XOR<DocenteUpdateWithoutMateriasInput, DocenteUncheckedUpdateWithoutMateriasInput>
    create: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutMateriasInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutMateriasInput, DocenteUncheckedUpdateWithoutMateriasInput>
  }

  export type DocenteUpdateWithoutMateriasInput = {
    userId?: IntFieldUpdateOperationsInput | number
    especialidad?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateWithoutMateriasInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    especialidad?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUpsertWithoutDocentesInput = {
    update: XOR<MateriaUpdateWithoutDocentesInput, MateriaUncheckedUpdateWithoutDocentesInput>
    create: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutDocentesInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutDocentesInput, MateriaUncheckedUpdateWithoutDocentesInput>
  }

  export type MateriaUpdateWithoutDocentesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    ciclo?: CicloUpdateOneRequiredWithoutMateriasNestedInput
    estudiantes?: Estudiante_MateriaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutDocentesInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    estudiantes?: Estudiante_MateriaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type PeriodoUpsertWithoutDocente_materiasInput = {
    update: XOR<PeriodoUpdateWithoutDocente_materiasInput, PeriodoUncheckedUpdateWithoutDocente_materiasInput>
    create: XOR<PeriodoCreateWithoutDocente_materiasInput, PeriodoUncheckedCreateWithoutDocente_materiasInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutDocente_materiasInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutDocente_materiasInput, PeriodoUncheckedUpdateWithoutDocente_materiasInput>
  }

  export type PeriodoUpdateWithoutDocente_materiasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    estudiante_materias?: Estudiante_MateriaUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateWithoutDocente_materiasInput = {
    id_periodo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    estudiante_materias?: Estudiante_MateriaUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type EstudianteCreateWithoutMateriasInput = {
    userId: number
    fecha_nacimiento: Date | string
    estado?: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
  }

  export type EstudianteUncheckedCreateWithoutMateriasInput = {
    id_estudiante?: number
    userId: number
    fecha_nacimiento: Date | string
    id_carrera: number
    estado?: string
  }

  export type EstudianteCreateOrConnectWithoutMateriasInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
  }

  export type MateriaCreateWithoutEstudiantesInput = {
    nombre: string
    codigo: string
    creditos: number
    ciclo: CicloCreateNestedOneWithoutMateriasInput
    docentes?: Docente_MateriaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutEstudiantesInput = {
    id_materia?: number
    nombre: string
    codigo: string
    creditos: number
    id_ciclo: number
    docentes?: Docente_MateriaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutEstudiantesInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
  }

  export type PeriodoCreateWithoutEstudiante_materiasInput = {
    nombre: string
    activo?: boolean
    docente_materias?: Docente_MateriaCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateWithoutEstudiante_materiasInput = {
    id_periodo?: number
    nombre: string
    activo?: boolean
    docente_materias?: Docente_MateriaUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoCreateOrConnectWithoutEstudiante_materiasInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutEstudiante_materiasInput, PeriodoUncheckedCreateWithoutEstudiante_materiasInput>
  }

  export type EstudianteUpsertWithoutMateriasInput = {
    update: XOR<EstudianteUpdateWithoutMateriasInput, EstudianteUncheckedUpdateWithoutMateriasInput>
    create: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutMateriasInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutMateriasInput, EstudianteUncheckedUpdateWithoutMateriasInput>
  }

  export type EstudianteUpdateWithoutMateriasInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutMateriasInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUpsertWithoutEstudiantesInput = {
    update: XOR<MateriaUpdateWithoutEstudiantesInput, MateriaUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutEstudiantesInput, MateriaUncheckedUpdateWithoutEstudiantesInput>
  }

  export type MateriaUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    ciclo?: CicloUpdateOneRequiredWithoutMateriasNestedInput
    docentes?: Docente_MateriaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutEstudiantesInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    docentes?: Docente_MateriaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type PeriodoUpsertWithoutEstudiante_materiasInput = {
    update: XOR<PeriodoUpdateWithoutEstudiante_materiasInput, PeriodoUncheckedUpdateWithoutEstudiante_materiasInput>
    create: XOR<PeriodoCreateWithoutEstudiante_materiasInput, PeriodoUncheckedCreateWithoutEstudiante_materiasInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutEstudiante_materiasInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutEstudiante_materiasInput, PeriodoUncheckedUpdateWithoutEstudiante_materiasInput>
  }

  export type PeriodoUpdateWithoutEstudiante_materiasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    docente_materias?: Docente_MateriaUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateWithoutEstudiante_materiasInput = {
    id_periodo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    docente_materias?: Docente_MateriaUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type Docente_MateriaCreateManyDocenteInput = {
    id_materia: number
    id_periodo: number
  }

  export type Docente_MateriaUpdateWithoutDocenteInput = {
    materia?: MateriaUpdateOneRequiredWithoutDocentesNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutDocente_materiasNestedInput
  }

  export type Docente_MateriaUncheckedUpdateWithoutDocenteInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
  }

  export type Docente_MateriaUncheckedUpdateManyWithoutDocenteInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
  }

  export type Estudiante_MateriaCreateManyEstudianteInput = {
    id_materia: number
    id_periodo: number
    fecha_inscripcion: Date | string
  }

  export type Estudiante_MateriaUpdateWithoutEstudianteInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneRequiredWithoutEstudiantesNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutEstudiante_materiasNestedInput
  }

  export type Estudiante_MateriaUncheckedUpdateWithoutEstudianteInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Estudiante_MateriaUncheckedUpdateManyWithoutEstudianteInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CicloCreateManyCarreraInput = {
    id_ciclo?: number
    nombre: string
    numero: number
  }

  export type EstudianteCreateManyCarreraInput = {
    id_estudiante?: number
    userId: number
    fecha_nacimiento: Date | string
    estado?: string
  }

  export type CicloUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    materias?: MateriaUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateWithoutCarreraInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    materias?: MateriaUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateManyWithoutCarreraInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteUpdateWithoutCarreraInput = {
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    materias?: Estudiante_MateriaUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutCarreraInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    materias?: Estudiante_MateriaUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type Docente_MateriaCreateManyPeriodoInput = {
    id_docente: number
    id_materia: number
  }

  export type Estudiante_MateriaCreateManyPeriodoInput = {
    id_estudiante: number
    id_materia: number
    fecha_inscripcion: Date | string
  }

  export type Docente_MateriaUpdateWithoutPeriodoInput = {
    docente?: DocenteUpdateOneRequiredWithoutMateriasNestedInput
    materia?: MateriaUpdateOneRequiredWithoutDocentesNestedInput
  }

  export type Docente_MateriaUncheckedUpdateWithoutPeriodoInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
  }

  export type Docente_MateriaUncheckedUpdateManyWithoutPeriodoInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
  }

  export type Estudiante_MateriaUpdateWithoutPeriodoInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: EstudianteUpdateOneRequiredWithoutMateriasNestedInput
    materia?: MateriaUpdateOneRequiredWithoutEstudiantesNestedInput
  }

  export type Estudiante_MateriaUncheckedUpdateWithoutPeriodoInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Estudiante_MateriaUncheckedUpdateManyWithoutPeriodoInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaCreateManyCicloInput = {
    id_materia?: number
    nombre: string
    codigo: string
    creditos: number
  }

  export type MateriaUpdateWithoutCicloInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    docentes?: Docente_MateriaUpdateManyWithoutMateriaNestedInput
    estudiantes?: Estudiante_MateriaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCicloInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
    docentes?: Docente_MateriaUncheckedUpdateManyWithoutMateriaNestedInput
    estudiantes?: Estudiante_MateriaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutCicloInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    creditos?: IntFieldUpdateOperationsInput | number
  }

  export type Docente_MateriaCreateManyMateriaInput = {
    id_docente: number
    id_periodo: number
  }

  export type Estudiante_MateriaCreateManyMateriaInput = {
    id_estudiante: number
    id_periodo: number
    fecha_inscripcion: Date | string
  }

  export type Docente_MateriaUpdateWithoutMateriaInput = {
    docente?: DocenteUpdateOneRequiredWithoutMateriasNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutDocente_materiasNestedInput
  }

  export type Docente_MateriaUncheckedUpdateWithoutMateriaInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
  }

  export type Docente_MateriaUncheckedUpdateManyWithoutMateriaInput = {
    id_docente?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
  }

  export type Estudiante_MateriaUpdateWithoutMateriaInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estudiante?: EstudianteUpdateOneRequiredWithoutMateriasNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutEstudiante_materiasNestedInput
  }

  export type Estudiante_MateriaUncheckedUpdateWithoutMateriaInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Estudiante_MateriaUncheckedUpdateManyWithoutMateriaInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_periodo?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}