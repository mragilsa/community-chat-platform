
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomMember
 * 
 */
export type RoomMember = $Result.DefaultSelection<Prisma.$RoomMemberPayload>
/**
 * Model RoomMessage
 * 
 */
export type RoomMessage = $Result.DefaultSelection<Prisma.$RoomMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleType: {
  USER: 'USER',
  MEMBER: 'MEMBER',
  OWNER: 'OWNER'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]


export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type RoleType = $Enums.RoleType

export const RoleType: typeof $Enums.RoleType

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomMember`: Exposes CRUD operations for the **RoomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomMembers
    * const roomMembers = await prisma.roomMember.findMany()
    * ```
    */
  get roomMember(): Prisma.RoomMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomMessage`: Exposes CRUD operations for the **RoomMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomMessages
    * const roomMessages = await prisma.roomMessage.findMany()
    * ```
    */
  get roomMessage(): Prisma.RoomMessageDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Role: 'Role',
    User: 'User',
    Group: 'Group',
    Room: 'Room',
    RoomMember: 'RoomMember',
    RoomMessage: 'RoomMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "group" | "room" | "roomMember" | "roomMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomMember: {
        payload: Prisma.$RoomMemberPayload<ExtArgs>
        fields: Prisma.RoomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findFirst: {
            args: Prisma.RoomMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findMany: {
            args: Prisma.RoomMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          create: {
            args: Prisma.RoomMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          createMany: {
            args: Prisma.RoomMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          delete: {
            args: Prisma.RoomMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          update: {
            args: Prisma.RoomMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          deleteMany: {
            args: Prisma.RoomMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          upsert: {
            args: Prisma.RoomMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          aggregate: {
            args: Prisma.RoomMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomMember>
          }
          groupBy: {
            args: Prisma.RoomMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomMemberCountArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberCountAggregateOutputType> | number
          }
        }
      }
      RoomMessage: {
        payload: Prisma.$RoomMessagePayload<ExtArgs>
        fields: Prisma.RoomMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          findFirst: {
            args: Prisma.RoomMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          findMany: {
            args: Prisma.RoomMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          create: {
            args: Prisma.RoomMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          createMany: {
            args: Prisma.RoomMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          delete: {
            args: Prisma.RoomMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          update: {
            args: Prisma.RoomMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          deleteMany: {
            args: Prisma.RoomMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          upsert: {
            args: Prisma.RoomMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          aggregate: {
            args: Prisma.RoomMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomMessage>
          }
          groupBy: {
            args: Prisma.RoomMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomMessageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomMessageCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    group?: GroupOmit
    room?: RoomOmit
    roomMember?: RoomMemberOmit
    roomMessage?: RoomMessageOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    room_member_roles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    room_member_roles?: boolean | RoleCountOutputTypeCountRoom_member_rolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRoom_member_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rooms: number
    room_members: number
    room_messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    room_members?: boolean | UserCountOutputTypeCountRoom_membersArgs
    room_messages?: boolean | UserCountOutputTypeCountRoom_messagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoom_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoom_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    members: number
    message: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RoomCountOutputTypeCountMembersArgs
    message?: boolean | RoomCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    role: $Enums.RoleType | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    role: $Enums.RoleType | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    role: $Enums.RoleType
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    room_member_roles?: boolean | Role$room_member_rolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    room_member_roles?: boolean | Role$room_member_rolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      room_member_roles: Prisma.$RoomMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.RoleType
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room_member_roles<T extends Role$room_member_rolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$room_member_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly role: FieldRef<"Role", 'RoleType'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.room_member_roles
   */
  export type Role$room_member_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    photo: string | null
    role_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    photo: string | null
    role_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    photo: number
    role_id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    photo?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    photo?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    photo?: true
    role_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    room_members?: boolean | User$room_membersArgs<ExtArgs>
    room_messages?: boolean | User$room_messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "photo" | "role_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    room_members?: boolean | User$room_membersArgs<ExtArgs>
    room_messages?: boolean | User$room_messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      room_members: Prisma.$RoomMemberPayload<ExtArgs>[]
      room_messages: Prisma.$RoomMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      photo: string
      role_id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room_members<T extends User$room_membersArgs<ExtArgs> = {}>(args?: Subset<T, User$room_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room_messages<T extends User$room_messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$room_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.room_members
   */
  export type User$room_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * User.room_messages
   */
  export type User$room_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    cursor?: RoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    photo: string | null
    about: string | null
    room_id: string | null
    created_at: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    photo: string | null
    about: string | null
    room_id: string | null
    created_at: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    photo: number
    about: number
    benefit: number
    room_id: number
    created_at: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    about?: true
    room_id?: true
    created_at?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    about?: true
    room_id?: true
    created_at?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    about?: true
    benefit?: true
    room_id?: true
    created_at?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    photo: string
    about: string
    benefit: string[]
    room_id: string
    created_at: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    about?: boolean
    benefit?: boolean
    room_id?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    about?: boolean
    benefit?: boolean
    room_id?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    about?: boolean
    benefit?: boolean
    room_id?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    photo?: boolean
    about?: boolean
    benefit?: boolean
    room_id?: boolean
    created_at?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photo" | "about" | "benefit" | "room_id" | "created_at", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      photo: string
      about: string
      benefit: string[]
      room_id: string
      created_at: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly photo: FieldRef<"Group", 'String'>
    readonly about: FieldRef<"Group", 'String'>
    readonly benefit: FieldRef<"Group", 'String[]'>
    readonly room_id: FieldRef<"Group", 'String'>
    readonly created_at: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_group: boolean | null
    created_by: string | null
    created_at: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_group: boolean | null
    created_by: string | null
    created_at: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    is_group: number
    created_by: number
    created_at: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    is_group?: true
    created_by?: true
    created_at?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    is_group?: true
    created_by?: true
    created_at?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    is_group?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string | null
    is_group: boolean
    created_by: string
    created_at: Date
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    message?: boolean | Room$messageArgs<ExtArgs>
    group?: boolean | Room$groupArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_group" | "created_by" | "created_at", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    message?: boolean | Room$messageArgs<ExtArgs>
    group?: boolean | Room$groupArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$RoomMemberPayload<ExtArgs>[]
      message: Prisma.$RoomMessagePayload<ExtArgs>[]
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      is_group: boolean
      created_by: string
      created_at: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Room$membersArgs<ExtArgs> = {}>(args?: Subset<T, Room$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message<T extends Room$messageArgs<ExtArgs> = {}>(args?: Subset<T, Room$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group<T extends Room$groupArgs<ExtArgs> = {}>(args?: Subset<T, Room$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly is_group: FieldRef<"Room", 'Boolean'>
    readonly created_by: FieldRef<"Room", 'String'>
    readonly created_at: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.members
   */
  export type Room$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * Room.message
   */
  export type Room$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    cursor?: RoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * Room.group
   */
  export type Room$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomMember
   */

  export type AggregateRoomMember = {
    _count: RoomMemberCountAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  export type RoomMemberMinAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
    role_id: string | null
    joined_at: Date | null
  }

  export type RoomMemberMaxAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
    role_id: string | null
    joined_at: Date | null
  }

  export type RoomMemberCountAggregateOutputType = {
    id: number
    room_id: number
    user_id: number
    role_id: number
    joined_at: number
    _all: number
  }


  export type RoomMemberMinAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    role_id?: true
    joined_at?: true
  }

  export type RoomMemberMaxAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    role_id?: true
    joined_at?: true
  }

  export type RoomMemberCountAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    role_id?: true
    joined_at?: true
    _all?: true
  }

  export type RoomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMember to aggregate.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomMembers
    **/
    _count?: true | RoomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMemberMaxAggregateInputType
  }

  export type GetRoomMemberAggregateType<T extends RoomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomMember[P]>
      : GetScalarType<T[P], AggregateRoomMember[P]>
  }




  export type RoomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithAggregationInput | RoomMemberOrderByWithAggregationInput[]
    by: RoomMemberScalarFieldEnum[] | RoomMemberScalarFieldEnum
    having?: RoomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomMemberCountAggregateInputType | true
    _min?: RoomMemberMinAggregateInputType
    _max?: RoomMemberMaxAggregateInputType
  }

  export type RoomMemberGroupByOutputType = {
    id: string
    room_id: string
    user_id: string
    role_id: string
    joined_at: Date
    _count: RoomMemberCountAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  type GetRoomMemberGroupByPayload<T extends RoomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
        }
      >
    >


  export type RoomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectScalar = {
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
  }

  export type RoomMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "user_id" | "role_id" | "joined_at", ExtArgs["result"]["roomMember"]>
  export type RoomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $RoomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomMember"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_id: string
      user_id: string
      role_id: string
      joined_at: Date
    }, ExtArgs["result"]["roomMember"]>
    composites: {}
  }

  type RoomMemberGetPayload<S extends boolean | null | undefined | RoomMemberDefaultArgs> = $Result.GetResult<Prisma.$RoomMemberPayload, S>

  type RoomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomMemberCountAggregateInputType | true
    }

  export interface RoomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomMember'], meta: { name: 'RoomMember' } }
    /**
     * Find zero or one RoomMember that matches the filter.
     * @param {RoomMemberFindUniqueArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMemberFindUniqueArgs>(args: SelectSubset<T, RoomMemberFindUniqueArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomMemberFindUniqueOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMemberFindFirstArgs>(args?: SelectSubset<T, RoomMemberFindFirstArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMembers
     * const roomMembers = await prisma.roomMember.findMany()
     * 
     * // Get first 10 RoomMembers
     * const roomMembers = await prisma.roomMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomMemberFindManyArgs>(args?: SelectSubset<T, RoomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomMember.
     * @param {RoomMemberCreateArgs} args - Arguments to create a RoomMember.
     * @example
     * // Create one RoomMember
     * const RoomMember = await prisma.roomMember.create({
     *   data: {
     *     // ... data to create a RoomMember
     *   }
     * })
     * 
     */
    create<T extends RoomMemberCreateArgs>(args: SelectSubset<T, RoomMemberCreateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomMembers.
     * @param {RoomMemberCreateManyArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomMemberCreateManyArgs>(args?: SelectSubset<T, RoomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomMembers and returns the data saved in the database.
     * @param {RoomMemberCreateManyAndReturnArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomMember.
     * @param {RoomMemberDeleteArgs} args - Arguments to delete one RoomMember.
     * @example
     * // Delete one RoomMember
     * const RoomMember = await prisma.roomMember.delete({
     *   where: {
     *     // ... filter to delete one RoomMember
     *   }
     * })
     * 
     */
    delete<T extends RoomMemberDeleteArgs>(args: SelectSubset<T, RoomMemberDeleteArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomMember.
     * @param {RoomMemberUpdateArgs} args - Arguments to update one RoomMember.
     * @example
     * // Update one RoomMember
     * const roomMember = await prisma.roomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomMemberUpdateArgs>(args: SelectSubset<T, RoomMemberUpdateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomMembers.
     * @param {RoomMemberDeleteManyArgs} args - Arguments to filter RoomMembers to delete.
     * @example
     * // Delete a few RoomMembers
     * const { count } = await prisma.roomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomMemberDeleteManyArgs>(args?: SelectSubset<T, RoomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomMemberUpdateManyArgs>(args: SelectSubset<T, RoomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers and returns the data updated in the database.
     * @param {RoomMemberUpdateManyAndReturnArgs} args - Arguments to update many RoomMembers.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RoomMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomMember.
     * @param {RoomMemberUpsertArgs} args - Arguments to update or create a RoomMember.
     * @example
     * // Update or create a RoomMember
     * const roomMember = await prisma.roomMember.upsert({
     *   create: {
     *     // ... data to create a RoomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMember we want to update
     *   }
     * })
     */
    upsert<T extends RoomMemberUpsertArgs>(args: SelectSubset<T, RoomMemberUpsertArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberCountArgs} args - Arguments to filter RoomMembers to count.
     * @example
     * // Count the number of RoomMembers
     * const count = await prisma.roomMember.count({
     *   where: {
     *     // ... the filter for the RoomMembers we want to count
     *   }
     * })
    **/
    count<T extends RoomMemberCountArgs>(
      args?: Subset<T, RoomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomMemberAggregateArgs>(args: Subset<T, RoomMemberAggregateArgs>): Prisma.PrismaPromise<GetRoomMemberAggregateType<T>>

    /**
     * Group by RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberGroupByArgs} args - Group by arguments.
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
      T extends RoomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMemberGroupByArgs['orderBy'] }
        : { orderBy?: RoomMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomMember model
   */
  readonly fields: RoomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomMember model
   */
  interface RoomMemberFieldRefs {
    readonly id: FieldRef<"RoomMember", 'String'>
    readonly room_id: FieldRef<"RoomMember", 'String'>
    readonly user_id: FieldRef<"RoomMember", 'String'>
    readonly role_id: FieldRef<"RoomMember", 'String'>
    readonly joined_at: FieldRef<"RoomMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomMember findUnique
   */
  export type RoomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findUniqueOrThrow
   */
  export type RoomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findFirst
   */
  export type RoomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findFirstOrThrow
   */
  export type RoomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findMany
   */
  export type RoomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMembers to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember create
   */
  export type RoomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomMember.
     */
    data: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
  }

  /**
   * RoomMember createMany
   */
  export type RoomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomMember createManyAndReturn
   */
  export type RoomMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember update
   */
  export type RoomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomMember.
     */
    data: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
    /**
     * Choose, which RoomMember to update.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember updateMany
   */
  export type RoomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
  }

  /**
   * RoomMember updateManyAndReturn
   */
  export type RoomMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember upsert
   */
  export type RoomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomMember to update in case it exists.
     */
    where: RoomMemberWhereUniqueInput
    /**
     * In case the RoomMember found by the `where` argument doesn't exist, create a new RoomMember with this data.
     */
    create: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
    /**
     * In case the RoomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
  }

  /**
   * RoomMember delete
   */
  export type RoomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter which RoomMember to delete.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember deleteMany
   */
  export type RoomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMembers to delete
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to delete.
     */
    limit?: number
  }

  /**
   * RoomMember without action
   */
  export type RoomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
  }


  /**
   * Model RoomMessage
   */

  export type AggregateRoomMessage = {
    _count: RoomMessageCountAggregateOutputType | null
    _min: RoomMessageMinAggregateOutputType | null
    _max: RoomMessageMaxAggregateOutputType | null
  }

  export type RoomMessageMinAggregateOutputType = {
    id: string | null
    room_id: string | null
    sender_id: string | null
    content: string | null
    type: $Enums.MessageType | null
    created_at: Date | null
  }

  export type RoomMessageMaxAggregateOutputType = {
    id: string | null
    room_id: string | null
    sender_id: string | null
    content: string | null
    type: $Enums.MessageType | null
    created_at: Date | null
  }

  export type RoomMessageCountAggregateOutputType = {
    id: number
    room_id: number
    sender_id: number
    content: number
    type: number
    created_at: number
    _all: number
  }


  export type RoomMessageMinAggregateInputType = {
    id?: true
    room_id?: true
    sender_id?: true
    content?: true
    type?: true
    created_at?: true
  }

  export type RoomMessageMaxAggregateInputType = {
    id?: true
    room_id?: true
    sender_id?: true
    content?: true
    type?: true
    created_at?: true
  }

  export type RoomMessageCountAggregateInputType = {
    id?: true
    room_id?: true
    sender_id?: true
    content?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type RoomMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMessage to aggregate.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomMessages
    **/
    _count?: true | RoomMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMessageMaxAggregateInputType
  }

  export type GetRoomMessageAggregateType<T extends RoomMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomMessage[P]>
      : GetScalarType<T[P], AggregateRoomMessage[P]>
  }




  export type RoomMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithAggregationInput | RoomMessageOrderByWithAggregationInput[]
    by: RoomMessageScalarFieldEnum[] | RoomMessageScalarFieldEnum
    having?: RoomMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomMessageCountAggregateInputType | true
    _min?: RoomMessageMinAggregateInputType
    _max?: RoomMessageMaxAggregateInputType
  }

  export type RoomMessageGroupByOutputType = {
    id: string
    room_id: string
    sender_id: string
    content: string
    type: $Enums.MessageType | null
    created_at: Date
    _count: RoomMessageCountAggregateOutputType | null
    _min: RoomMessageMinAggregateOutputType | null
    _max: RoomMessageMaxAggregateOutputType | null
  }

  type GetRoomMessageGroupByPayload<T extends RoomMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMessageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMessageGroupByOutputType[P]>
        }
      >
    >


  export type RoomMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectScalar = {
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type RoomMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "sender_id" | "content" | "type" | "created_at", ExtArgs["result"]["roomMessage"]>
  export type RoomMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomMessage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_id: string
      sender_id: string
      content: string
      type: $Enums.MessageType | null
      created_at: Date
    }, ExtArgs["result"]["roomMessage"]>
    composites: {}
  }

  type RoomMessageGetPayload<S extends boolean | null | undefined | RoomMessageDefaultArgs> = $Result.GetResult<Prisma.$RoomMessagePayload, S>

  type RoomMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomMessageCountAggregateInputType | true
    }

  export interface RoomMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomMessage'], meta: { name: 'RoomMessage' } }
    /**
     * Find zero or one RoomMessage that matches the filter.
     * @param {RoomMessageFindUniqueArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMessageFindUniqueArgs>(args: SelectSubset<T, RoomMessageFindUniqueArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomMessageFindUniqueOrThrowArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindFirstArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMessageFindFirstArgs>(args?: SelectSubset<T, RoomMessageFindFirstArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindFirstOrThrowArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMessages
     * const roomMessages = await prisma.roomMessage.findMany()
     * 
     * // Get first 10 RoomMessages
     * const roomMessages = await prisma.roomMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomMessageWithIdOnly = await prisma.roomMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomMessageFindManyArgs>(args?: SelectSubset<T, RoomMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomMessage.
     * @param {RoomMessageCreateArgs} args - Arguments to create a RoomMessage.
     * @example
     * // Create one RoomMessage
     * const RoomMessage = await prisma.roomMessage.create({
     *   data: {
     *     // ... data to create a RoomMessage
     *   }
     * })
     * 
     */
    create<T extends RoomMessageCreateArgs>(args: SelectSubset<T, RoomMessageCreateArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomMessages.
     * @param {RoomMessageCreateManyArgs} args - Arguments to create many RoomMessages.
     * @example
     * // Create many RoomMessages
     * const roomMessage = await prisma.roomMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomMessageCreateManyArgs>(args?: SelectSubset<T, RoomMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomMessages and returns the data saved in the database.
     * @param {RoomMessageCreateManyAndReturnArgs} args - Arguments to create many RoomMessages.
     * @example
     * // Create many RoomMessages
     * const roomMessage = await prisma.roomMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomMessages and only return the `id`
     * const roomMessageWithIdOnly = await prisma.roomMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomMessage.
     * @param {RoomMessageDeleteArgs} args - Arguments to delete one RoomMessage.
     * @example
     * // Delete one RoomMessage
     * const RoomMessage = await prisma.roomMessage.delete({
     *   where: {
     *     // ... filter to delete one RoomMessage
     *   }
     * })
     * 
     */
    delete<T extends RoomMessageDeleteArgs>(args: SelectSubset<T, RoomMessageDeleteArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomMessage.
     * @param {RoomMessageUpdateArgs} args - Arguments to update one RoomMessage.
     * @example
     * // Update one RoomMessage
     * const roomMessage = await prisma.roomMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomMessageUpdateArgs>(args: SelectSubset<T, RoomMessageUpdateArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomMessages.
     * @param {RoomMessageDeleteManyArgs} args - Arguments to filter RoomMessages to delete.
     * @example
     * // Delete a few RoomMessages
     * const { count } = await prisma.roomMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomMessageDeleteManyArgs>(args?: SelectSubset<T, RoomMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMessages
     * const roomMessage = await prisma.roomMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomMessageUpdateManyArgs>(args: SelectSubset<T, RoomMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMessages and returns the data updated in the database.
     * @param {RoomMessageUpdateManyAndReturnArgs} args - Arguments to update many RoomMessages.
     * @example
     * // Update many RoomMessages
     * const roomMessage = await prisma.roomMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomMessages and only return the `id`
     * const roomMessageWithIdOnly = await prisma.roomMessage.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RoomMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomMessage.
     * @param {RoomMessageUpsertArgs} args - Arguments to update or create a RoomMessage.
     * @example
     * // Update or create a RoomMessage
     * const roomMessage = await prisma.roomMessage.upsert({
     *   create: {
     *     // ... data to create a RoomMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMessage we want to update
     *   }
     * })
     */
    upsert<T extends RoomMessageUpsertArgs>(args: SelectSubset<T, RoomMessageUpsertArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageCountArgs} args - Arguments to filter RoomMessages to count.
     * @example
     * // Count the number of RoomMessages
     * const count = await prisma.roomMessage.count({
     *   where: {
     *     // ... the filter for the RoomMessages we want to count
     *   }
     * })
    **/
    count<T extends RoomMessageCountArgs>(
      args?: Subset<T, RoomMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomMessageAggregateArgs>(args: Subset<T, RoomMessageAggregateArgs>): Prisma.PrismaPromise<GetRoomMessageAggregateType<T>>

    /**
     * Group by RoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageGroupByArgs} args - Group by arguments.
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
      T extends RoomMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMessageGroupByArgs['orderBy'] }
        : { orderBy?: RoomMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomMessage model
   */
  readonly fields: RoomMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomMessage model
   */
  interface RoomMessageFieldRefs {
    readonly id: FieldRef<"RoomMessage", 'String'>
    readonly room_id: FieldRef<"RoomMessage", 'String'>
    readonly sender_id: FieldRef<"RoomMessage", 'String'>
    readonly content: FieldRef<"RoomMessage", 'String'>
    readonly type: FieldRef<"RoomMessage", 'MessageType'>
    readonly created_at: FieldRef<"RoomMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomMessage findUnique
   */
  export type RoomMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage findUniqueOrThrow
   */
  export type RoomMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage findFirst
   */
  export type RoomMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMessages.
     */
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage findFirstOrThrow
   */
  export type RoomMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMessages.
     */
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage findMany
   */
  export type RoomMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessages to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage create
   */
  export type RoomMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomMessage.
     */
    data: XOR<RoomMessageCreateInput, RoomMessageUncheckedCreateInput>
  }

  /**
   * RoomMessage createMany
   */
  export type RoomMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomMessages.
     */
    data: RoomMessageCreateManyInput | RoomMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomMessage createManyAndReturn
   */
  export type RoomMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * The data used to create many RoomMessages.
     */
    data: RoomMessageCreateManyInput | RoomMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMessage update
   */
  export type RoomMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomMessage.
     */
    data: XOR<RoomMessageUpdateInput, RoomMessageUncheckedUpdateInput>
    /**
     * Choose, which RoomMessage to update.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage updateMany
   */
  export type RoomMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomMessages.
     */
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyInput>
    /**
     * Filter which RoomMessages to update
     */
    where?: RoomMessageWhereInput
    /**
     * Limit how many RoomMessages to update.
     */
    limit?: number
  }

  /**
   * RoomMessage updateManyAndReturn
   */
  export type RoomMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * The data used to update RoomMessages.
     */
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyInput>
    /**
     * Filter which RoomMessages to update
     */
    where?: RoomMessageWhereInput
    /**
     * Limit how many RoomMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMessage upsert
   */
  export type RoomMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomMessage to update in case it exists.
     */
    where: RoomMessageWhereUniqueInput
    /**
     * In case the RoomMessage found by the `where` argument doesn't exist, create a new RoomMessage with this data.
     */
    create: XOR<RoomMessageCreateInput, RoomMessageUncheckedCreateInput>
    /**
     * In case the RoomMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMessageUpdateInput, RoomMessageUncheckedUpdateInput>
  }

  /**
   * RoomMessage delete
   */
  export type RoomMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter which RoomMessage to delete.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage deleteMany
   */
  export type RoomMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMessages to delete
     */
    where?: RoomMessageWhereInput
    /**
     * Limit how many RoomMessages to delete.
     */
    limit?: number
  }

  /**
   * RoomMessage without action
   */
  export type RoomMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    photo: 'photo',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photo: 'photo',
    about: 'about',
    benefit: 'benefit',
    room_id: 'room_id',
    created_at: 'created_at'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_group: 'is_group',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomMemberScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    user_id: 'user_id',
    role_id: 'role_id',
    joined_at: 'joined_at'
  };

  export type RoomMemberScalarFieldEnum = (typeof RoomMemberScalarFieldEnum)[keyof typeof RoomMemberScalarFieldEnum]


  export const RoomMessageScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    sender_id: 'sender_id',
    content: 'content',
    type: 'type',
    created_at: 'created_at'
  };

  export type RoomMessageScalarFieldEnum = (typeof RoomMessageScalarFieldEnum)[keyof typeof RoomMessageScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleType'
   */
  export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>
    


  /**
   * Reference to a field of type 'RoleType[]'
   */
  export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>
    


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
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    role?: EnumRoleTypeFilter<"Role"> | $Enums.RoleType
    users?: UserListRelationFilter
    room_member_roles?: RoomMemberListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    users?: UserOrderByRelationAggregateInput
    room_member_roles?: RoomMemberOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role?: EnumRoleTypeFilter<"Role"> | $Enums.RoleType
    users?: UserListRelationFilter
    room_member_roles?: RoomMemberListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    role?: EnumRoleTypeWithAggregatesFilter<"Role"> | $Enums.RoleType
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo?: StringFilter<"User"> | string
    role_id?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    rooms?: RoomListRelationFilter
    room_members?: RoomMemberListRelationFilter
    room_messages?: RoomMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
    role?: RoleOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
    room_members?: RoomMemberOrderByRelationAggregateInput
    room_messages?: RoomMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo?: StringFilter<"User"> | string
    role_id?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    rooms?: RoomListRelationFilter
    room_members?: RoomMemberListRelationFilter
    room_messages?: RoomMessageListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    photo?: StringWithAggregatesFilter<"User"> | string
    role_id?: StringWithAggregatesFilter<"User"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    photo?: StringFilter<"Group"> | string
    about?: StringFilter<"Group"> | string
    benefit?: StringNullableListFilter<"Group">
    room_id?: StringFilter<"Group"> | string
    created_at?: DateTimeFilter<"Group"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    about?: SortOrder
    benefit?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    room_id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    photo?: StringFilter<"Group"> | string
    about?: StringFilter<"Group"> | string
    benefit?: StringNullableListFilter<"Group">
    created_at?: DateTimeFilter<"Group"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "room_id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    about?: SortOrder
    benefit?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    photo?: StringWithAggregatesFilter<"Group"> | string
    about?: StringWithAggregatesFilter<"Group"> | string
    benefit?: StringNullableListFilter<"Group">
    room_id?: StringWithAggregatesFilter<"Group"> | string
    created_at?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringNullableFilter<"Room"> | string | null
    is_group?: BoolFilter<"Room"> | boolean
    created_by?: StringFilter<"Room"> | string
    created_at?: DateTimeFilter<"Room"> | Date | string
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: RoomMemberListRelationFilter
    message?: RoomMessageListRelationFilter
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    created_by_user?: UserOrderByWithRelationInput
    members?: RoomMemberOrderByRelationAggregateInput
    message?: RoomMessageOrderByRelationAggregateInput
    group?: GroupOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringNullableFilter<"Room"> | string | null
    is_group?: BoolFilter<"Room"> | boolean
    created_by?: StringFilter<"Room"> | string
    created_at?: DateTimeFilter<"Room"> | Date | string
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: RoomMemberListRelationFilter
    message?: RoomMessageListRelationFilter
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringNullableWithAggregatesFilter<"Room"> | string | null
    is_group?: BoolWithAggregatesFilter<"Room"> | boolean
    created_by?: StringWithAggregatesFilter<"Room"> | string
    created_at?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomMemberWhereInput = {
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    id?: StringFilter<"RoomMember"> | string
    room_id?: StringFilter<"RoomMember"> | string
    user_id?: StringFilter<"RoomMember"> | string
    role_id?: StringFilter<"RoomMember"> | string
    joined_at?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type RoomMemberOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type RoomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    room_id?: StringFilter<"RoomMember"> | string
    user_id?: StringFilter<"RoomMember"> | string
    role_id?: StringFilter<"RoomMember"> | string
    joined_at?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id">

  export type RoomMemberOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
    _count?: RoomMemberCountOrderByAggregateInput
    _max?: RoomMemberMaxOrderByAggregateInput
    _min?: RoomMemberMinOrderByAggregateInput
  }

  export type RoomMemberScalarWhereWithAggregatesInput = {
    AND?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    OR?: RoomMemberScalarWhereWithAggregatesInput[]
    NOT?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomMember"> | string
    room_id?: StringWithAggregatesFilter<"RoomMember"> | string
    user_id?: StringWithAggregatesFilter<"RoomMember"> | string
    role_id?: StringWithAggregatesFilter<"RoomMember"> | string
    joined_at?: DateTimeWithAggregatesFilter<"RoomMember"> | Date | string
  }

  export type RoomMessageWhereInput = {
    AND?: RoomMessageWhereInput | RoomMessageWhereInput[]
    OR?: RoomMessageWhereInput[]
    NOT?: RoomMessageWhereInput | RoomMessageWhereInput[]
    id?: StringFilter<"RoomMessage"> | string
    room_id?: StringFilter<"RoomMessage"> | string
    sender_id?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeFilter<"RoomMessage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomMessageOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoomMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomMessageWhereInput | RoomMessageWhereInput[]
    OR?: RoomMessageWhereInput[]
    NOT?: RoomMessageWhereInput | RoomMessageWhereInput[]
    room_id?: StringFilter<"RoomMessage"> | string
    sender_id?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeFilter<"RoomMessage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoomMessageOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: RoomMessageCountOrderByAggregateInput
    _max?: RoomMessageMaxOrderByAggregateInput
    _min?: RoomMessageMinOrderByAggregateInput
  }

  export type RoomMessageScalarWhereWithAggregatesInput = {
    AND?: RoomMessageScalarWhereWithAggregatesInput | RoomMessageScalarWhereWithAggregatesInput[]
    OR?: RoomMessageScalarWhereWithAggregatesInput[]
    NOT?: RoomMessageScalarWhereWithAggregatesInput | RoomMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomMessage"> | string
    room_id?: StringWithAggregatesFilter<"RoomMessage"> | string
    sender_id?: StringWithAggregatesFilter<"RoomMessage"> | string
    content?: StringWithAggregatesFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableWithAggregatesFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeWithAggregatesFilter<"RoomMessage"> | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserCreateNestedManyWithoutRoleInput
    room_member_roles?: RoomMemberCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    room_member_roles?: RoomMemberUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUpdateManyWithoutRoleNestedInput
    room_member_roles?: RoomMemberUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    room_member_roles?: RoomMemberUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    role: $Enums.RoleType
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    rooms?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_messages?: RoomMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    rooms?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_messages?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    rooms?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_messages?: RoomMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_messages?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    photo: string
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    created_at?: Date | string
    room: RoomCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    photo: string
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    room_id: string
    created_at?: Date | string
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    room_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    photo: string
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    room_id: string
    created_at?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    room_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    created_by_user: UserCreateNestedOneWithoutRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    message?: RoomMessageCreateNestedManyWithoutRoomInput
    group?: GroupCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    message?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
    group?: GroupUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    message?: RoomMessageUpdateManyWithoutRoomNestedInput
    group?: GroupUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    message?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
    group?: GroupUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateInput = {
    id?: string
    joined_at?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutRoom_membersInput
    role: RoleCreateNestedOneWithoutRoom_member_rolesInput
  }

  export type RoomMemberUncheckedCreateInput = {
    id?: string
    room_id: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutRoom_membersNestedInput
    role?: RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput
  }

  export type RoomMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyInput = {
    id?: string
    room_id: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
    room: RoomCreateNestedOneWithoutMessageInput
    user: UserCreateNestedOneWithoutRoom_messagesInput
  }

  export type RoomMessageUncheckedCreateInput = {
    id?: string
    room_id: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMessageNestedInput
    user?: UserUpdateOneRequiredWithoutRoom_messagesNestedInput
  }

  export type RoomMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageCreateManyInput = {
    id?: string
    room_id: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RoomMemberListRelationFilter = {
    every?: RoomMemberWhereInput
    some?: RoomMemberWhereInput
    none?: RoomMemberWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
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

  export type EnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomMessageListRelationFilter = {
    every?: RoomMessageWhereInput
    some?: RoomMessageWhereInput
    none?: RoomMessageWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    about?: SortOrder
    benefit?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    about?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    about?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomMemberCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
  }

  export type RoomMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
  }

  export type RoomMemberMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
  }

  export type EnumMessageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableFilter<$PrismaModel> | $Enums.MessageType | null
  }

  export type RoomMessageCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMessageMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type EnumMessageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MessageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoomMemberCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleType
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoomMemberUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoleInput | RoomMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoleInput | RoomMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoleInput | RoomMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoleInput | RoomMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoleInput | RoomMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoleInput | RoomMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoomUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreated_by_userInput | RoomUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreated_by_userInput | RoomUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreated_by_userInput | RoomUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutUserInput | RoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutUserInput | RoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutUserInput | RoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutUserInput | RoomMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutUserInput | RoomMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutUserInput | RoomMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreated_by_userInput | RoomUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreated_by_userInput | RoomUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreated_by_userInput | RoomUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutUserInput | RoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutUserInput | RoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutUserInput | RoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutUserInput | RoomMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutUserInput | RoomMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutUserInput | RoomMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type GroupCreatebenefitInput = {
    set: string[]
  }

  export type RoomCreateNestedOneWithoutGroupInput = {
    create?: XOR<RoomCreateWithoutGroupInput, RoomUncheckedCreateWithoutGroupInput>
    connectOrCreate?: RoomCreateOrConnectWithoutGroupInput
    connect?: RoomWhereUniqueInput
  }

  export type GroupUpdatebenefitInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomUpdateOneRequiredWithoutGroupNestedInput = {
    create?: XOR<RoomCreateWithoutGroupInput, RoomUncheckedCreateWithoutGroupInput>
    connectOrCreate?: RoomCreateOrConnectWithoutGroupInput
    upsert?: RoomUpsertWithoutGroupInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutGroupInput, RoomUpdateWithoutGroupInput>, RoomUncheckedUpdateWithoutGroupInput>
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomMemberCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type GroupCreateNestedOneWithoutRoomInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput
    connect?: GroupWhereUniqueInput
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedOneWithoutRoomInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput
    connect?: GroupWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomMemberUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutRoomInput | RoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutRoomInput | RoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutRoomInput | RoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type GroupUpdateOneWithoutRoomNestedInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput
    upsert?: GroupUpsertWithoutRoomInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutRoomInput, GroupUpdateWithoutRoomInput>, GroupUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutRoomInput | RoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutRoomInput | RoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutRoomInput | RoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type GroupUncheckedUpdateOneWithoutRoomNestedInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput
    upsert?: GroupUpsertWithoutRoomInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutRoomInput, GroupUpdateWithoutRoomInput>, GroupUncheckedUpdateWithoutRoomInput>
  }

  export type RoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoom_membersInput = {
    create?: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_membersInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutRoom_member_rolesInput = {
    create?: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoom_member_rolesInput
    connect?: RoleWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    upsert?: RoomUpsertWithoutMembersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMembersInput, RoomUpdateWithoutMembersInput>, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutRoom_membersNestedInput = {
    create?: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_membersInput
    upsert?: UserUpsertWithoutRoom_membersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoom_membersInput, UserUpdateWithoutRoom_membersInput>, UserUncheckedUpdateWithoutRoom_membersInput>
  }

  export type RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput = {
    create?: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoom_member_rolesInput
    upsert?: RoleUpsertWithoutRoom_member_rolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRoom_member_rolesInput, RoleUpdateWithoutRoom_member_rolesInput>, RoleUncheckedUpdateWithoutRoom_member_rolesInput>
  }

  export type RoomCreateNestedOneWithoutMessageInput = {
    create?: XOR<RoomCreateWithoutMessageInput, RoomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessageInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoom_messagesInput = {
    create?: XOR<UserCreateWithoutRoom_messagesInput, UserUncheckedCreateWithoutRoom_messagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_messagesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType | null
  }

  export type RoomUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<RoomCreateWithoutMessageInput, RoomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessageInput
    upsert?: RoomUpsertWithoutMessageInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMessageInput, RoomUpdateWithoutMessageInput>, RoomUncheckedUpdateWithoutMessageInput>
  }

  export type UserUpdateOneRequiredWithoutRoom_messagesNestedInput = {
    create?: XOR<UserCreateWithoutRoom_messagesInput, UserUncheckedCreateWithoutRoom_messagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_messagesInput
    upsert?: UserUpsertWithoutRoom_messagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoom_messagesInput, UserUpdateWithoutRoom_messagesInput>, UserUncheckedUpdateWithoutRoom_messagesInput>
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

  export type NestedEnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
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

  export type NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableFilter<$PrismaModel> | $Enums.MessageType | null
  }

  export type NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MessageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    rooms?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_messages?: RoomMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    rooms?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_messages?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoomMemberCreateWithoutRoleInput = {
    id?: string
    joined_at?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutRoom_membersInput
  }

  export type RoomMemberUncheckedCreateWithoutRoleInput = {
    id?: string
    room_id: string
    user_id: string
    joined_at?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutRoleInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput>
  }

  export type RoomMemberCreateManyRoleInputEnvelope = {
    data: RoomMemberCreateManyRoleInput | RoomMemberCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo?: StringFilter<"User"> | string
    role_id?: StringFilter<"User"> | string
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutRoleInput, RoomMemberUncheckedUpdateWithoutRoleInput>
    create: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutRoleInput, RoomMemberUncheckedUpdateWithoutRoleInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutRoleInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoomMemberScalarWhereInput = {
    AND?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    OR?: RoomMemberScalarWhereInput[]
    NOT?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    id?: StringFilter<"RoomMember"> | string
    room_id?: StringFilter<"RoomMember"> | string
    user_id?: StringFilter<"RoomMember"> | string
    role_id?: StringFilter<"RoomMember"> | string
    joined_at?: DateTimeFilter<"RoomMember"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    role: $Enums.RoleType
    room_member_roles?: RoomMemberCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    role: $Enums.RoleType
    room_member_roles?: RoomMemberUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoomCreateWithoutCreated_by_userInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    message?: RoomMessageCreateNestedManyWithoutRoomInput
    group?: GroupCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCreated_by_userInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    message?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
    group?: GroupUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCreated_by_userInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput>
  }

  export type RoomCreateManyCreated_by_userInputEnvelope = {
    data: RoomCreateManyCreated_by_userInput | RoomCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type RoomMemberCreateWithoutUserInput = {
    id?: string
    joined_at?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    role: RoleCreateNestedOneWithoutRoom_member_rolesInput
  }

  export type RoomMemberUncheckedCreateWithoutUserInput = {
    id?: string
    room_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput>
  }

  export type RoomMemberCreateManyUserInputEnvelope = {
    data: RoomMemberCreateManyUserInput | RoomMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomMessageCreateWithoutUserInput = {
    id?: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
    room: RoomCreateNestedOneWithoutMessageInput
  }

  export type RoomMessageUncheckedCreateWithoutUserInput = {
    id?: string
    room_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageCreateOrConnectWithoutUserInput = {
    where: RoomMessageWhereUniqueInput
    create: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput>
  }

  export type RoomMessageCreateManyUserInputEnvelope = {
    data: RoomMessageCreateManyUserInput | RoomMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    room_member_roles?: RoomMemberUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    room_member_roles?: RoomMemberUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoomUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCreated_by_userInput, RoomUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCreated_by_userInput, RoomUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type RoomUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringNullableFilter<"Room"> | string | null
    is_group?: BoolFilter<"Room"> | boolean
    created_by?: StringFilter<"Room"> | string
    created_at?: DateTimeFilter<"Room"> | Date | string
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutUserInput, RoomMemberUncheckedUpdateWithoutUserInput>
    create: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutUserInput, RoomMemberUncheckedUpdateWithoutUserInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutUserInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomMessageWhereUniqueInput
    update: XOR<RoomMessageUpdateWithoutUserInput, RoomMessageUncheckedUpdateWithoutUserInput>
    create: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput>
  }

  export type RoomMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomMessageWhereUniqueInput
    data: XOR<RoomMessageUpdateWithoutUserInput, RoomMessageUncheckedUpdateWithoutUserInput>
  }

  export type RoomMessageUpdateManyWithWhereWithoutUserInput = {
    where: RoomMessageScalarWhereInput
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomMessageScalarWhereInput = {
    AND?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
    OR?: RoomMessageScalarWhereInput[]
    NOT?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
    id?: StringFilter<"RoomMessage"> | string
    room_id?: StringFilter<"RoomMessage"> | string
    sender_id?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeFilter<"RoomMessage"> | Date | string
  }

  export type RoomCreateWithoutGroupInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    created_by_user: UserCreateNestedOneWithoutRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    message?: RoomMessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutGroupInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    message?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutGroupInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutGroupInput, RoomUncheckedCreateWithoutGroupInput>
  }

  export type RoomUpsertWithoutGroupInput = {
    update: XOR<RoomUpdateWithoutGroupInput, RoomUncheckedUpdateWithoutGroupInput>
    create: XOR<RoomCreateWithoutGroupInput, RoomUncheckedCreateWithoutGroupInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutGroupInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutGroupInput, RoomUncheckedUpdateWithoutGroupInput>
  }

  export type RoomUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    message?: RoomMessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    message?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_messages?: RoomMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_messages?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type RoomMemberCreateWithoutRoomInput = {
    id?: string
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutRoom_membersInput
    role: RoleCreateNestedOneWithoutRoom_member_rolesInput
  }

  export type RoomMemberUncheckedCreateWithoutRoomInput = {
    id?: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberCreateManyRoomInputEnvelope = {
    data: RoomMemberCreateManyRoomInput | RoomMemberCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomMessageCreateWithoutRoomInput = {
    id?: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutRoom_messagesInput
  }

  export type RoomMessageUncheckedCreateWithoutRoomInput = {
    id?: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageCreateOrConnectWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    create: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type RoomMessageCreateManyRoomInputEnvelope = {
    data: RoomMessageCreateManyRoomInput | RoomMessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutRoomInput = {
    id?: string
    name: string
    photo: string
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    created_at?: Date | string
  }

  export type GroupUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    photo: string
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    created_at?: Date | string
  }

  export type GroupCreateOrConnectWithoutRoomInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_messages?: RoomMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_messages?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    update: XOR<RoomMessageUpdateWithoutRoomInput, RoomMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type RoomMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    data: XOR<RoomMessageUpdateWithoutRoomInput, RoomMessageUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMessageUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMessageScalarWhereInput
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type GroupUpsertWithoutRoomInput = {
    update: XOR<GroupUpdateWithoutRoomInput, GroupUncheckedUpdateWithoutRoomInput>
    create: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutRoomInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutRoomInput, GroupUncheckedUpdateWithoutRoomInput>
  }

  export type GroupUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    created_by_user: UserCreateNestedOneWithoutRoomsInput
    message?: RoomMessageCreateNestedManyWithoutRoomInput
    group?: GroupCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
    message?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
    group?: GroupUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMembersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutRoom_membersInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    rooms?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_messages?: RoomMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoom_membersInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    rooms?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_messages?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoom_membersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
  }

  export type RoleCreateWithoutRoom_member_rolesInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRoom_member_rolesInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRoom_member_rolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
  }

  export type RoomUpsertWithoutMembersInput = {
    update: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type RoomUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutRoomsNestedInput
    message?: RoomMessageUpdateManyWithoutRoomNestedInput
    group?: GroupUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
    group?: GroupUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoom_membersInput = {
    update: XOR<UserUpdateWithoutRoom_membersInput, UserUncheckedUpdateWithoutRoom_membersInput>
    create: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoom_membersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoom_membersInput, UserUncheckedUpdateWithoutRoom_membersInput>
  }

  export type UserUpdateWithoutRoom_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    rooms?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_messages?: RoomMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoom_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_messages?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutRoom_member_rolesInput = {
    update: XOR<RoleUpdateWithoutRoom_member_rolesInput, RoleUncheckedUpdateWithoutRoom_member_rolesInput>
    create: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRoom_member_rolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRoom_member_rolesInput, RoleUncheckedUpdateWithoutRoom_member_rolesInput>
  }

  export type RoleUpdateWithoutRoom_member_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRoom_member_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoomCreateWithoutMessageInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    created_by_user: UserCreateNestedOneWithoutRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    group?: GroupCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMessageInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    group?: GroupUncheckedCreateNestedOneWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMessageInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMessageInput, RoomUncheckedCreateWithoutMessageInput>
  }

  export type UserCreateWithoutRoom_messagesInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    rooms?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoom_messagesInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    rooms?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoom_messagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoom_messagesInput, UserUncheckedCreateWithoutRoom_messagesInput>
  }

  export type RoomUpsertWithoutMessageInput = {
    update: XOR<RoomUpdateWithoutMessageInput, RoomUncheckedUpdateWithoutMessageInput>
    create: XOR<RoomCreateWithoutMessageInput, RoomUncheckedCreateWithoutMessageInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMessageInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMessageInput, RoomUncheckedUpdateWithoutMessageInput>
  }

  export type RoomUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    group?: GroupUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    group?: GroupUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoom_messagesInput = {
    update: XOR<UserUpdateWithoutRoom_messagesInput, UserUncheckedUpdateWithoutRoom_messagesInput>
    create: XOR<UserCreateWithoutRoom_messagesInput, UserUncheckedCreateWithoutRoom_messagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoom_messagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoom_messagesInput, UserUncheckedUpdateWithoutRoom_messagesInput>
  }

  export type UserUpdateWithoutRoom_messagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    rooms?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoom_messagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
  }

  export type RoomMemberCreateManyRoleInput = {
    id?: string
    room_id: string
    user_id: string
    joined_at?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_messages?: RoomMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_messages?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMemberUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutRoom_membersNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyCreated_by_userInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
  }

  export type RoomMemberCreateManyUserInput = {
    id?: string
    room_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMessageCreateManyUserInput = {
    id?: string
    room_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomUpdateWithoutCreated_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    message?: RoomMessageUpdateManyWithoutRoomNestedInput
    group?: GroupUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCreated_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    message?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
    group?: GroupUncheckedUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    role?: RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMessageNestedInput
  }

  export type RoomMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyRoomInput = {
    id?: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMessageCreateManyRoomInput = {
    id?: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMemberUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoom_membersNestedInput
    role?: RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoom_messagesNestedInput
  }

  export type RoomMessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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