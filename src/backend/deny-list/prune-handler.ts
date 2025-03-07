// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';

export interface PruneHandlerProps extends lambda.FunctionOptions {
}

export class PruneHandler extends lambda.Function {
  constructor(scope: Construct, id: string, props?: PruneHandlerProps) {
    super(scope, id, {
      description: 'backend/deny-list/prune-handler.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/prune-handler.lambda.bundle')),
    });
  }
}