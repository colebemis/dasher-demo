// GENERATED TYPES FOR NEXUS-PRISMA. /!\ DO NOT EDIT MANUALLY

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      User: UserObject
      UserConnection: UserConnectionObject
      PageInfo: PageInfoObject
      UserEdge: UserEdgeObject
      AggregateUser: AggregateUserObject
      Board: BoardObject
      Column: ColumnObject
      BoardConnection: BoardConnectionObject
      BoardEdge: BoardEdgeObject
      AggregateBoard: AggregateBoardObject
      ColumnConnection: ColumnConnectionObject
      ColumnEdge: ColumnEdgeObject
      AggregateColumn: AggregateColumnObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      UserSubscriptionPayload: UserSubscriptionPayloadObject
      UserPreviousValues: UserPreviousValuesObject
      BoardSubscriptionPayload: BoardSubscriptionPayloadObject
      BoardPreviousValues: BoardPreviousValuesObject
      ColumnSubscriptionPayload: ColumnSubscriptionPayloadObject
      ColumnPreviousValues: ColumnPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      User: UserFieldDetails
      UserConnection: UserConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      UserEdge: UserEdgeFieldDetails
      AggregateUser: AggregateUserFieldDetails
      Board: BoardFieldDetails
      Column: ColumnFieldDetails
      BoardConnection: BoardConnectionFieldDetails
      BoardEdge: BoardEdgeFieldDetails
      AggregateBoard: AggregateBoardFieldDetails
      ColumnConnection: ColumnConnectionFieldDetails
      ColumnEdge: ColumnEdgeFieldDetails
      AggregateColumn: AggregateColumnFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      UserSubscriptionPayload: UserSubscriptionPayloadFieldDetails
      UserPreviousValues: UserPreviousValuesFieldDetails
      BoardSubscriptionPayload: BoardSubscriptionPayloadFieldDetails
      BoardPreviousValues: BoardPreviousValuesFieldDetails
      ColumnSubscriptionPayload: ColumnSubscriptionPayloadFieldDetails
      ColumnPreviousValues: ColumnPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      UserWhereUniqueInput: UserWhereUniqueInputInputObject
      UserWhereInput: UserWhereInputInputObject
      BoardWhereUniqueInput: BoardWhereUniqueInputInputObject
      ColumnWhereInput: ColumnWhereInputInputObject
      BoardWhereInput: BoardWhereInputInputObject
      ColumnWhereUniqueInput: ColumnWhereUniqueInputInputObject
      UserCreateInput: UserCreateInputInputObject
      UserUpdateInput: UserUpdateInputInputObject
      UserUpdateManyMutationInput: UserUpdateManyMutationInputInputObject
      BoardCreateInput: BoardCreateInputInputObject
      ColumnCreateManyWithoutBoardInput: ColumnCreateManyWithoutBoardInputInputObject
      ColumnCreateWithoutBoardInput: ColumnCreateWithoutBoardInputInputObject
      BoardUpdateInput: BoardUpdateInputInputObject
      ColumnUpdateManyWithoutBoardInput: ColumnUpdateManyWithoutBoardInputInputObject
      ColumnUpdateWithWhereUniqueWithoutBoardInput: ColumnUpdateWithWhereUniqueWithoutBoardInputInputObject
      ColumnUpdateWithoutBoardDataInput: ColumnUpdateWithoutBoardDataInputInputObject
      ColumnUpsertWithWhereUniqueWithoutBoardInput: ColumnUpsertWithWhereUniqueWithoutBoardInputInputObject
      ColumnScalarWhereInput: ColumnScalarWhereInputInputObject
      ColumnUpdateManyWithWhereNestedInput: ColumnUpdateManyWithWhereNestedInputInputObject
      ColumnUpdateManyDataInput: ColumnUpdateManyDataInputInputObject
      BoardUpdateManyMutationInput: BoardUpdateManyMutationInputInputObject
      ColumnCreateInput: ColumnCreateInputInputObject
      BoardCreateOneWithoutColumnsInput: BoardCreateOneWithoutColumnsInputInputObject
      BoardCreateWithoutColumnsInput: BoardCreateWithoutColumnsInputInputObject
      ColumnUpdateInput: ColumnUpdateInputInputObject
      BoardUpdateOneRequiredWithoutColumnsInput: BoardUpdateOneRequiredWithoutColumnsInputInputObject
      BoardUpdateWithoutColumnsDataInput: BoardUpdateWithoutColumnsDataInputInputObject
      BoardUpsertWithoutColumnsInput: BoardUpsertWithoutColumnsInputInputObject
      ColumnUpdateManyMutationInput: ColumnUpdateManyMutationInputInputObject
      UserSubscriptionWhereInput: UserSubscriptionWhereInputInputObject
      BoardSubscriptionWhereInput: BoardSubscriptionWhereInputInputObject
      ColumnSubscriptionWhereInput: ColumnSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    UserOrderByInput: UserOrderByInputValues,
    ColumnOrderByInput: ColumnOrderByInputValues,
    BoardOrderByInput: BoardOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'user', args?: QueryUserArgs[] | false, alias?: string  } 
  | { name: 'users', args?: QueryUsersArgs[] | false, alias?: string  } 
  | { name: 'usersConnection', args?: QueryUsersConnectionArgs[] | false, alias?: string  } 
  | { name: 'board', args?: QueryBoardArgs[] | false, alias?: string  } 
  | { name: 'boards', args?: QueryBoardsArgs[] | false, alias?: string  } 
  | { name: 'boardsConnection', args?: QueryBoardsConnectionArgs[] | false, alias?: string  } 
  | { name: 'column', args?: QueryColumnArgs[] | false, alias?: string  } 
  | { name: 'columns', args?: QueryColumnsArgs[] | false, alias?: string  } 
  | { name: 'columnsConnection', args?: QueryColumnsConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'user'
  | 'users'
  | 'usersConnection'
  | 'board'
  | 'boards'
  | 'boardsConnection'
  | 'column'
  | 'columns'
  | 'columnsConnection'
  | 'node'


type QueryUserArgs =
  | 'where'
type QueryUsersArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryUsersConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryBoardArgs =
  | 'where'
type QueryBoardsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryBoardsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryColumnArgs =
  | 'where'
type QueryColumnsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryColumnsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails {
  user: {
    type: 'User'
    args: Record<QueryUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  users: {
    type: 'User'
    args: Record<QueryUsersArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User[]> | prisma.User[]
  }
  usersConnection: {
    type: 'UserConnection'
    args: Record<QueryUsersConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserConnection> | prisma.UserConnection
  }
  board: {
    type: 'Board'
    args: Record<QueryBoardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: BoardWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board | null> | prisma.Board | null
  }
  boards: {
    type: 'Board'
    args: Record<QueryBoardsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: BoardWhereInput | null, orderBy?: prisma.BoardOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board[]> | prisma.Board[]
  }
  boardsConnection: {
    type: 'BoardConnection'
    args: Record<QueryBoardsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: BoardWhereInput | null, orderBy?: prisma.BoardOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BoardConnection> | prisma.BoardConnection
  }
  column: {
    type: 'Column'
    args: Record<QueryColumnArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: ColumnWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column | null> | prisma.Column | null
  }
  columns: {
    type: 'Column'
    args: Record<QueryColumnsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: ColumnWhereInput | null, orderBy?: prisma.ColumnOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column[]> | prisma.Column[]
  }
  columnsConnection: {
    type: 'ColumnConnection'
    args: Record<QueryColumnsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: ColumnWhereInput | null, orderBy?: prisma.ColumnOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ColumnConnection> | prisma.ColumnConnection
  }
  node: {
    type: 'Node'
    args: Record<QueryNodeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { id: string }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null
  }
}
  

// Types for User

type UserObject =
  | UserFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type UserFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'name'



  

export interface UserFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for UserConnection

type UserConnectionObject =
  | UserConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type UserConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface UserConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'UserEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserEdge[]> | prisma.UserEdge[]
  }
  aggregate: {
    type: 'AggregateUser'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateUser> | prisma.AggregateUser
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for UserEdge

type UserEdgeObject =
  | UserEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type UserEdgeFields =
  | 'node'
  | 'cursor'



  

export interface UserEdgeFieldDetails {
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateUser

type AggregateUserObject =
  | AggregateUserFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateUserFields =
  | 'count'



  

export interface AggregateUserFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Board

type BoardObject =
  | BoardFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'query', args?: [] | false, alias?: string  } 
  | { name: 'columns', args?: BoardColumnsArgs[] | false, alias?: string  } 

type BoardFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'name'
  | 'query'
  | 'columns'


type BoardColumnsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface BoardFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  query: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  columns: {
    type: 'Column'
    args: Record<BoardColumnsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Board">,
      args: { where?: ColumnWhereInput | null, orderBy?: prisma.ColumnOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column[]> | prisma.Column[]
  }
}
  

// Types for Column

type ColumnObject =
  | ColumnFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'board', args?: [] | false, alias?: string  } 
  | { name: 'index', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'query', args?: [] | false, alias?: string  } 

type ColumnFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'board'
  | 'index'
  | 'name'
  | 'query'



  

export interface ColumnFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  board: {
    type: 'Board'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Column">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board> | prisma.Board
  }
  index: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  query: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for BoardConnection

type BoardConnectionObject =
  | BoardConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type BoardConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface BoardConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BoardConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'BoardEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"BoardConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BoardEdge[]> | prisma.BoardEdge[]
  }
  aggregate: {
    type: 'AggregateBoard'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BoardConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateBoard> | prisma.AggregateBoard
  }
}
  

// Types for BoardEdge

type BoardEdgeObject =
  | BoardEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type BoardEdgeFields =
  | 'node'
  | 'cursor'



  

export interface BoardEdgeFieldDetails {
  node: {
    type: 'Board'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BoardEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board> | prisma.Board
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateBoard

type AggregateBoardObject =
  | AggregateBoardFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateBoardFields =
  | 'count'



  

export interface AggregateBoardFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for ColumnConnection

type ColumnConnectionObject =
  | ColumnConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type ColumnConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface ColumnConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ColumnConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'ColumnEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"ColumnConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ColumnEdge[]> | prisma.ColumnEdge[]
  }
  aggregate: {
    type: 'AggregateColumn'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ColumnConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateColumn> | prisma.AggregateColumn
  }
}
  

// Types for ColumnEdge

type ColumnEdgeObject =
  | ColumnEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type ColumnEdgeFields =
  | 'node'
  | 'cursor'



  

export interface ColumnEdgeFieldDetails {
  node: {
    type: 'Column'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ColumnEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column> | prisma.Column
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateColumn

type AggregateColumnObject =
  | AggregateColumnFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateColumnFields =
  | 'count'



  

export interface AggregateColumnFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createUser', args?: MutationCreateUserArgs[] | false, alias?: string  } 
  | { name: 'updateUser', args?: MutationUpdateUserArgs[] | false, alias?: string  } 
  | { name: 'updateManyUsers', args?: MutationUpdateManyUsersArgs[] | false, alias?: string  } 
  | { name: 'upsertUser', args?: MutationUpsertUserArgs[] | false, alias?: string  } 
  | { name: 'deleteUser', args?: MutationDeleteUserArgs[] | false, alias?: string  } 
  | { name: 'deleteManyUsers', args?: MutationDeleteManyUsersArgs[] | false, alias?: string  } 
  | { name: 'createBoard', args?: MutationCreateBoardArgs[] | false, alias?: string  } 
  | { name: 'updateBoard', args?: MutationUpdateBoardArgs[] | false, alias?: string  } 
  | { name: 'updateManyBoards', args?: MutationUpdateManyBoardsArgs[] | false, alias?: string  } 
  | { name: 'upsertBoard', args?: MutationUpsertBoardArgs[] | false, alias?: string  } 
  | { name: 'deleteBoard', args?: MutationDeleteBoardArgs[] | false, alias?: string  } 
  | { name: 'deleteManyBoards', args?: MutationDeleteManyBoardsArgs[] | false, alias?: string  } 
  | { name: 'createColumn', args?: MutationCreateColumnArgs[] | false, alias?: string  } 
  | { name: 'updateColumn', args?: MutationUpdateColumnArgs[] | false, alias?: string  } 
  | { name: 'updateManyColumns', args?: MutationUpdateManyColumnsArgs[] | false, alias?: string  } 
  | { name: 'upsertColumn', args?: MutationUpsertColumnArgs[] | false, alias?: string  } 
  | { name: 'deleteColumn', args?: MutationDeleteColumnArgs[] | false, alias?: string  } 
  | { name: 'deleteManyColumns', args?: MutationDeleteManyColumnsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createUser'
  | 'updateUser'
  | 'updateManyUsers'
  | 'upsertUser'
  | 'deleteUser'
  | 'deleteManyUsers'
  | 'createBoard'
  | 'updateBoard'
  | 'updateManyBoards'
  | 'upsertBoard'
  | 'deleteBoard'
  | 'deleteManyBoards'
  | 'createColumn'
  | 'updateColumn'
  | 'updateManyColumns'
  | 'upsertColumn'
  | 'deleteColumn'
  | 'deleteManyColumns'


type MutationCreateUserArgs =
  | 'data'
type MutationUpdateUserArgs =
  | 'data'
  | 'where'
type MutationUpdateManyUsersArgs =
  | 'data'
  | 'where'
type MutationUpsertUserArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteUserArgs =
  | 'where'
type MutationDeleteManyUsersArgs =
  | 'where'
type MutationCreateBoardArgs =
  | 'data'
type MutationUpdateBoardArgs =
  | 'data'
  | 'where'
type MutationUpdateManyBoardsArgs =
  | 'data'
  | 'where'
type MutationUpsertBoardArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteBoardArgs =
  | 'where'
type MutationDeleteManyBoardsArgs =
  | 'where'
type MutationCreateColumnArgs =
  | 'data'
type MutationUpdateColumnArgs =
  | 'data'
  | 'where'
type MutationUpdateManyColumnsArgs =
  | 'data'
  | 'where'
type MutationUpsertColumnArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteColumnArgs =
  | 'where'
type MutationDeleteManyColumnsArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createUser: {
    type: 'User'
    args: Record<MutationCreateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  updateUser: {
    type: 'User'
    args: Record<MutationUpdateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateInput, where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updateManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertUser: {
    type: 'User'
    args: Record<MutationUpsertUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  deleteUser: {
    type: 'User'
    args: Record<MutationDeleteUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  deleteManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createBoard: {
    type: 'Board'
    args: Record<MutationCreateBoardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: BoardCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board> | prisma.Board
  }
  updateBoard: {
    type: 'Board'
    args: Record<MutationUpdateBoardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: BoardUpdateInput, where: BoardWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board | null> | prisma.Board | null
  }
  updateManyBoards: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyBoardsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: BoardUpdateManyMutationInput, where?: BoardWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertBoard: {
    type: 'Board'
    args: Record<MutationUpsertBoardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: BoardWhereUniqueInput, create: BoardCreateInput, update: BoardUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board> | prisma.Board
  }
  deleteBoard: {
    type: 'Board'
    args: Record<MutationDeleteBoardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: BoardWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board | null> | prisma.Board | null
  }
  deleteManyBoards: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyBoardsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: BoardWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createColumn: {
    type: 'Column'
    args: Record<MutationCreateColumnArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ColumnCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column> | prisma.Column
  }
  updateColumn: {
    type: 'Column'
    args: Record<MutationUpdateColumnArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ColumnUpdateInput, where: ColumnWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column | null> | prisma.Column | null
  }
  updateManyColumns: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyColumnsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ColumnUpdateManyMutationInput, where?: ColumnWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertColumn: {
    type: 'Column'
    args: Record<MutationUpsertColumnArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: ColumnWhereUniqueInput, create: ColumnCreateInput, update: ColumnUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column> | prisma.Column
  }
  deleteColumn: {
    type: 'Column'
    args: Record<MutationDeleteColumnArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: ColumnWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column | null> | prisma.Column | null
  }
  deleteManyColumns: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyColumnsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: ColumnWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'user', args?: SubscriptionUserArgs[] | false, alias?: string  } 
  | { name: 'board', args?: SubscriptionBoardArgs[] | false, alias?: string  } 
  | { name: 'column', args?: SubscriptionColumnArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'user'
  | 'board'
  | 'column'


type SubscriptionUserArgs =
  | 'where'
type SubscriptionBoardArgs =
  | 'where'
type SubscriptionColumnArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  user: {
    type: 'UserSubscriptionPayload'
    args: Record<SubscriptionUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: UserSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserSubscriptionPayload | null> | prisma.UserSubscriptionPayload | null
  }
  board: {
    type: 'BoardSubscriptionPayload'
    args: Record<SubscriptionBoardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: BoardSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BoardSubscriptionPayload | null> | prisma.BoardSubscriptionPayload | null
  }
  column: {
    type: 'ColumnSubscriptionPayload'
    args: Record<SubscriptionColumnArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: ColumnSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ColumnSubscriptionPayload | null> | prisma.ColumnSubscriptionPayload | null
  }
}
  

// Types for UserSubscriptionPayload

type UserSubscriptionPayloadObject =
  | UserSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type UserSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface UserSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'UserPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserPreviousValues | null> | prisma.UserPreviousValues | null
  }
}
  

// Types for UserPreviousValues

type UserPreviousValuesObject =
  | UserPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type UserPreviousValuesFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'name'



  

export interface UserPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for BoardSubscriptionPayload

type BoardSubscriptionPayloadObject =
  | BoardSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type BoardSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface BoardSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BoardSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Board'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"BoardSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Board | null> | prisma.Board | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'BoardPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"BoardSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BoardPreviousValues | null> | prisma.BoardPreviousValues | null
  }
}
  

// Types for BoardPreviousValues

type BoardPreviousValuesObject =
  | BoardPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'query', args?: [] | false, alias?: string  } 

type BoardPreviousValuesFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'name'
  | 'query'



  

export interface BoardPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  query: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for ColumnSubscriptionPayload

type ColumnSubscriptionPayloadObject =
  | ColumnSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type ColumnSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface ColumnSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ColumnSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Column'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"ColumnSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Column | null> | prisma.Column | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'ColumnPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"ColumnSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ColumnPreviousValues | null> | prisma.ColumnPreviousValues | null
  }
}
  

// Types for ColumnPreviousValues

type ColumnPreviousValuesObject =
  | ColumnPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'index', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'query', args?: [] | false, alias?: string  } 

type ColumnPreviousValuesFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'index'
  | 'name'
  | 'query'



  

export interface ColumnPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  index: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  query: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  


export interface UserWhereUniqueInput {
  id?: string | null
}
export type UserWhereUniqueInputInputObject =
  | Extract<keyof UserWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
}
export type UserWhereInputInputObject =
  | Extract<keyof UserWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface BoardWhereUniqueInput {
  id?: string | null
}
export type BoardWhereUniqueInputInputObject =
  | Extract<keyof BoardWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface ColumnWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  board?: BoardWhereInput | null
  index?: number | null
  index_not?: number | null
  index_in?: number[]
  index_not_in?: number[]
  index_lt?: number | null
  index_lte?: number | null
  index_gt?: number | null
  index_gte?: number | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  query?: string | null
  query_not?: string | null
  query_in?: string[]
  query_not_in?: string[]
  query_lt?: string | null
  query_lte?: string | null
  query_gt?: string | null
  query_gte?: string | null
  query_contains?: string | null
  query_not_contains?: string | null
  query_starts_with?: string | null
  query_not_starts_with?: string | null
  query_ends_with?: string | null
  query_not_ends_with?: string | null
  AND?: ColumnWhereInput[]
  OR?: ColumnWhereInput[]
  NOT?: ColumnWhereInput[]
}
export type ColumnWhereInputInputObject =
  | Extract<keyof ColumnWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'board', alias?: string  } 
  | { name: 'index', alias?: string  } 
  | { name: 'index_not', alias?: string  } 
  | { name: 'index_in', alias?: string  } 
  | { name: 'index_not_in', alias?: string  } 
  | { name: 'index_lt', alias?: string  } 
  | { name: 'index_lte', alias?: string  } 
  | { name: 'index_gt', alias?: string  } 
  | { name: 'index_gte', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'query', alias?: string  } 
  | { name: 'query_not', alias?: string  } 
  | { name: 'query_in', alias?: string  } 
  | { name: 'query_not_in', alias?: string  } 
  | { name: 'query_lt', alias?: string  } 
  | { name: 'query_lte', alias?: string  } 
  | { name: 'query_gt', alias?: string  } 
  | { name: 'query_gte', alias?: string  } 
  | { name: 'query_contains', alias?: string  } 
  | { name: 'query_not_contains', alias?: string  } 
  | { name: 'query_starts_with', alias?: string  } 
  | { name: 'query_not_starts_with', alias?: string  } 
  | { name: 'query_ends_with', alias?: string  } 
  | { name: 'query_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface BoardWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  query?: string | null
  query_not?: string | null
  query_in?: string[]
  query_not_in?: string[]
  query_lt?: string | null
  query_lte?: string | null
  query_gt?: string | null
  query_gte?: string | null
  query_contains?: string | null
  query_not_contains?: string | null
  query_starts_with?: string | null
  query_not_starts_with?: string | null
  query_ends_with?: string | null
  query_not_ends_with?: string | null
  columns_every?: ColumnWhereInput | null
  columns_some?: ColumnWhereInput | null
  columns_none?: ColumnWhereInput | null
  AND?: BoardWhereInput[]
  OR?: BoardWhereInput[]
  NOT?: BoardWhereInput[]
}
export type BoardWhereInputInputObject =
  | Extract<keyof BoardWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'query', alias?: string  } 
  | { name: 'query_not', alias?: string  } 
  | { name: 'query_in', alias?: string  } 
  | { name: 'query_not_in', alias?: string  } 
  | { name: 'query_lt', alias?: string  } 
  | { name: 'query_lte', alias?: string  } 
  | { name: 'query_gt', alias?: string  } 
  | { name: 'query_gte', alias?: string  } 
  | { name: 'query_contains', alias?: string  } 
  | { name: 'query_not_contains', alias?: string  } 
  | { name: 'query_starts_with', alias?: string  } 
  | { name: 'query_not_starts_with', alias?: string  } 
  | { name: 'query_ends_with', alias?: string  } 
  | { name: 'query_not_ends_with', alias?: string  } 
  | { name: 'columns_every', alias?: string  } 
  | { name: 'columns_some', alias?: string  } 
  | { name: 'columns_none', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface ColumnWhereUniqueInput {
  id?: string | null
}
export type ColumnWhereUniqueInputInputObject =
  | Extract<keyof ColumnWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface UserCreateInput {
  name?: string
}
export type UserCreateInputInputObject =
  | Extract<keyof UserCreateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface UserUpdateInput {
  name?: string | null
}
export type UserUpdateInputInputObject =
  | Extract<keyof UserUpdateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface UserUpdateManyMutationInput {
  name?: string | null
}
export type UserUpdateManyMutationInputInputObject =
  | Extract<keyof UserUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  
export interface BoardCreateInput {
  name?: string | null
  query?: string | null
  columns?: ColumnCreateManyWithoutBoardInput | null
}
export type BoardCreateInputInputObject =
  | Extract<keyof BoardCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  | { name: 'columns', alias?: string  } 
  
export interface ColumnCreateManyWithoutBoardInput {
  create?: ColumnCreateWithoutBoardInput[]
  connect?: ColumnWhereUniqueInput[]
}
export type ColumnCreateManyWithoutBoardInputInputObject =
  | Extract<keyof ColumnCreateManyWithoutBoardInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface ColumnCreateWithoutBoardInput {
  index?: number
  name?: string | null
  query?: string | null
}
export type ColumnCreateWithoutBoardInputInputObject =
  | Extract<keyof ColumnCreateWithoutBoardInput, string>
  | { name: 'index', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface BoardUpdateInput {
  name?: string | null
  query?: string | null
  columns?: ColumnUpdateManyWithoutBoardInput | null
}
export type BoardUpdateInputInputObject =
  | Extract<keyof BoardUpdateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  | { name: 'columns', alias?: string  } 
  
export interface ColumnUpdateManyWithoutBoardInput {
  create?: ColumnCreateWithoutBoardInput[]
  delete?: ColumnWhereUniqueInput[]
  connect?: ColumnWhereUniqueInput[]
  set?: ColumnWhereUniqueInput[]
  disconnect?: ColumnWhereUniqueInput[]
  update?: ColumnUpdateWithWhereUniqueWithoutBoardInput[]
  upsert?: ColumnUpsertWithWhereUniqueWithoutBoardInput[]
  deleteMany?: ColumnScalarWhereInput[]
  updateMany?: ColumnUpdateManyWithWhereNestedInput[]
}
export type ColumnUpdateManyWithoutBoardInputInputObject =
  | Extract<keyof ColumnUpdateManyWithoutBoardInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface ColumnUpdateWithWhereUniqueWithoutBoardInput {
  where?: ColumnWhereUniqueInput
  data?: ColumnUpdateWithoutBoardDataInput
}
export type ColumnUpdateWithWhereUniqueWithoutBoardInputInputObject =
  | Extract<keyof ColumnUpdateWithWhereUniqueWithoutBoardInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface ColumnUpdateWithoutBoardDataInput {
  index?: number | null
  name?: string | null
  query?: string | null
}
export type ColumnUpdateWithoutBoardDataInputInputObject =
  | Extract<keyof ColumnUpdateWithoutBoardDataInput, string>
  | { name: 'index', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface ColumnUpsertWithWhereUniqueWithoutBoardInput {
  where?: ColumnWhereUniqueInput
  update?: ColumnUpdateWithoutBoardDataInput
  create?: ColumnCreateWithoutBoardInput
}
export type ColumnUpsertWithWhereUniqueWithoutBoardInputInputObject =
  | Extract<keyof ColumnUpsertWithWhereUniqueWithoutBoardInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface ColumnScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  index?: number | null
  index_not?: number | null
  index_in?: number[]
  index_not_in?: number[]
  index_lt?: number | null
  index_lte?: number | null
  index_gt?: number | null
  index_gte?: number | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  query?: string | null
  query_not?: string | null
  query_in?: string[]
  query_not_in?: string[]
  query_lt?: string | null
  query_lte?: string | null
  query_gt?: string | null
  query_gte?: string | null
  query_contains?: string | null
  query_not_contains?: string | null
  query_starts_with?: string | null
  query_not_starts_with?: string | null
  query_ends_with?: string | null
  query_not_ends_with?: string | null
  AND?: ColumnScalarWhereInput[]
  OR?: ColumnScalarWhereInput[]
  NOT?: ColumnScalarWhereInput[]
}
export type ColumnScalarWhereInputInputObject =
  | Extract<keyof ColumnScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'index', alias?: string  } 
  | { name: 'index_not', alias?: string  } 
  | { name: 'index_in', alias?: string  } 
  | { name: 'index_not_in', alias?: string  } 
  | { name: 'index_lt', alias?: string  } 
  | { name: 'index_lte', alias?: string  } 
  | { name: 'index_gt', alias?: string  } 
  | { name: 'index_gte', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'query', alias?: string  } 
  | { name: 'query_not', alias?: string  } 
  | { name: 'query_in', alias?: string  } 
  | { name: 'query_not_in', alias?: string  } 
  | { name: 'query_lt', alias?: string  } 
  | { name: 'query_lte', alias?: string  } 
  | { name: 'query_gt', alias?: string  } 
  | { name: 'query_gte', alias?: string  } 
  | { name: 'query_contains', alias?: string  } 
  | { name: 'query_not_contains', alias?: string  } 
  | { name: 'query_starts_with', alias?: string  } 
  | { name: 'query_not_starts_with', alias?: string  } 
  | { name: 'query_ends_with', alias?: string  } 
  | { name: 'query_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface ColumnUpdateManyWithWhereNestedInput {
  where?: ColumnScalarWhereInput
  data?: ColumnUpdateManyDataInput
}
export type ColumnUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof ColumnUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface ColumnUpdateManyDataInput {
  index?: number | null
  name?: string | null
  query?: string | null
}
export type ColumnUpdateManyDataInputInputObject =
  | Extract<keyof ColumnUpdateManyDataInput, string>
  | { name: 'index', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface BoardUpdateManyMutationInput {
  name?: string | null
  query?: string | null
}
export type BoardUpdateManyMutationInputInputObject =
  | Extract<keyof BoardUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface ColumnCreateInput {
  board?: BoardCreateOneWithoutColumnsInput
  index?: number
  name?: string | null
  query?: string | null
}
export type ColumnCreateInputInputObject =
  | Extract<keyof ColumnCreateInput, string>
  | { name: 'board', alias?: string  } 
  | { name: 'index', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface BoardCreateOneWithoutColumnsInput {
  create?: BoardCreateWithoutColumnsInput | null
  connect?: BoardWhereUniqueInput | null
}
export type BoardCreateOneWithoutColumnsInputInputObject =
  | Extract<keyof BoardCreateOneWithoutColumnsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface BoardCreateWithoutColumnsInput {
  name?: string | null
  query?: string | null
}
export type BoardCreateWithoutColumnsInputInputObject =
  | Extract<keyof BoardCreateWithoutColumnsInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface ColumnUpdateInput {
  board?: BoardUpdateOneRequiredWithoutColumnsInput | null
  index?: number | null
  name?: string | null
  query?: string | null
}
export type ColumnUpdateInputInputObject =
  | Extract<keyof ColumnUpdateInput, string>
  | { name: 'board', alias?: string  } 
  | { name: 'index', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface BoardUpdateOneRequiredWithoutColumnsInput {
  create?: BoardCreateWithoutColumnsInput | null
  update?: BoardUpdateWithoutColumnsDataInput | null
  upsert?: BoardUpsertWithoutColumnsInput | null
  connect?: BoardWhereUniqueInput | null
}
export type BoardUpdateOneRequiredWithoutColumnsInputInputObject =
  | Extract<keyof BoardUpdateOneRequiredWithoutColumnsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface BoardUpdateWithoutColumnsDataInput {
  name?: string | null
  query?: string | null
}
export type BoardUpdateWithoutColumnsDataInputInputObject =
  | Extract<keyof BoardUpdateWithoutColumnsDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface BoardUpsertWithoutColumnsInput {
  update?: BoardUpdateWithoutColumnsDataInput
  create?: BoardCreateWithoutColumnsInput
}
export type BoardUpsertWithoutColumnsInputInputObject =
  | Extract<keyof BoardUpsertWithoutColumnsInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface ColumnUpdateManyMutationInput {
  index?: number | null
  name?: string | null
  query?: string | null
}
export type ColumnUpdateManyMutationInputInputObject =
  | Extract<keyof ColumnUpdateManyMutationInput, string>
  | { name: 'index', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'query', alias?: string  } 
  
export interface UserSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[]
  OR?: UserSubscriptionWhereInput[]
  NOT?: UserSubscriptionWhereInput[]
}
export type UserSubscriptionWhereInputInputObject =
  | Extract<keyof UserSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface BoardSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: BoardWhereInput | null
  AND?: BoardSubscriptionWhereInput[]
  OR?: BoardSubscriptionWhereInput[]
  NOT?: BoardSubscriptionWhereInput[]
}
export type BoardSubscriptionWhereInputInputObject =
  | Extract<keyof BoardSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface ColumnSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: ColumnWhereInput | null
  AND?: ColumnSubscriptionWhereInput[]
  OR?: ColumnSubscriptionWhereInput[]
  NOT?: ColumnSubscriptionWhereInput[]
}
export type ColumnSubscriptionWhereInputInputObject =
  | Extract<keyof ColumnSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type UserOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  
export type ColumnOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'index_ASC'
  | 'index_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'query_ASC'
  | 'query_DESC'
  
export type BoardOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'query_ASC'
  | 'query_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  