/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { experimental } from '@angular-devkit/core';
export declare enum ProjectType {
    Application = "application",
    Library = "library"
}
export declare enum Builders {
    AppShell = "@angular-devkit/build-angular:app-shell",
    Server = "@angular-devkit/build-angular:server",
    Browser = "@angular-devkit/build-angular:browser",
    Karma = "@angular-devkit/build-angular:karma",
    TsLint = "@angular-devkit/build-angular:tslint",
    NgPackagr = "@angular-devkit/build-ng-packagr:build",
    DevServer = "@angular-devkit/build-angular:dev-server",
    ExtractI18n = "@angular-devkit/build-angular:extract-i18n",
    Protractor = "@angular-devkit/build-angular:protractor"
}
export interface FileReplacements {
    replace: string;
    with: string;
}
export interface BrowserBuilderBaseOptions {
    main: string;
    tsConfig: string;
    fileReplacements?: FileReplacements[];
    outputPath?: string;
    index?: string;
    polyfills: string;
    assets?: (object | string)[];
    styles?: (object | string)[];
    scripts?: (object | string)[];
    sourceMap?: boolean;
}
export declare type OutputHashing = 'all' | 'media' | 'none' | 'bundles';
export interface BrowserBuilderOptions extends BrowserBuilderBaseOptions {
    serviceWorker?: boolean;
    optimization?: boolean;
    outputHashing?: OutputHashing;
    resourcesOutputPath?: string;
    extractCss?: boolean;
    namedChunks?: boolean;
    aot?: boolean;
    extractLicenses?: boolean;
    vendorChunk?: boolean;
    buildOptimizer?: boolean;
    ngswConfigPath?: string;
    budgets?: {
        type: string;
        maximumWarning?: string;
        maximumError?: string;
    }[];
    es5BrowserSupport?: boolean;
    webWorkerTsConfig?: string;
}
export interface ServeBuilderOptions {
    browserTarget: string;
}
export interface LibraryBuilderOptions {
    tsConfig: string;
    project: string;
}
export interface ServerBuilderOptions {
    outputPath: string;
    tsConfig: string;
    main: string;
    fileReplacements?: FileReplacements[];
    optimization?: {
        scripts?: boolean;
        styles?: boolean;
    };
    sourceMap?: boolean;
}
export interface AppShellBuilderOptions {
    browserTarget: string;
    serverTarget: string;
    route: string;
}
export interface TestBuilderOptions extends Partial<BrowserBuilderBaseOptions> {
    karmaConfig: string;
}
export interface LintBuilderOptions {
    tsConfig: string[] | string;
    exclude?: string[];
}
export interface ExtractI18nOptions {
    browserTarget: string;
}
export interface E2EOptions {
    protractorConfig: string;
    devServerTarget: string;
}
export interface BuilderTarget<TBuilder extends Builders, TOptions> {
    builder: TBuilder;
    options: TOptions;
    configurations?: {
        production: Partial<TOptions>;
        [key: string]: Partial<TOptions>;
    };
}
export declare type LibraryBuilderTarget = BuilderTarget<Builders.NgPackagr, LibraryBuilderOptions>;
export declare type BrowserBuilderTarget = BuilderTarget<Builders.Browser, BrowserBuilderOptions>;
export declare type ServerBuilderTarget = BuilderTarget<Builders.Server, ServerBuilderOptions>;
export declare type AppShellBuilderTarget = BuilderTarget<Builders.AppShell, AppShellBuilderOptions>;
export declare type LintBuilderTarget = BuilderTarget<Builders.TsLint, LintBuilderOptions>;
export declare type TestBuilderTarget = BuilderTarget<Builders.Karma, TestBuilderOptions>;
export declare type ServeBuilderTarget = BuilderTarget<Builders.DevServer, ServeBuilderOptions>;
export declare type ExtractI18nBuilderTarget = BuilderTarget<Builders.ExtractI18n, ExtractI18nOptions>;
export declare type E2EBuilderTarget = BuilderTarget<Builders.Protractor, E2EOptions>;
export interface WorkspaceSchema extends experimental.workspace.WorkspaceSchema {
    projects: {
        [key: string]: WorkspaceProject<ProjectType.Application | ProjectType.Library>;
    };
}
export interface WorkspaceProject<TProjectType extends ProjectType = ProjectType.Application> extends experimental.workspace.WorkspaceProject {
    /**
     * Project type.
     */
    projectType: ProjectType;
    /**
     * Tool options.
     */
    architect?: WorkspaceTargets<TProjectType>;
    /**
     * Tool options.
     */
    targets?: WorkspaceTargets<TProjectType>;
}
export interface WorkspaceTargets<TProjectType extends ProjectType = ProjectType.Application> {
    build?: TProjectType extends ProjectType.Library ? LibraryBuilderTarget : BrowserBuilderTarget;
    server?: ServerBuilderTarget;
    lint?: LintBuilderTarget;
    test?: TestBuilderTarget;
    serve?: ServeBuilderTarget;
    e2e?: E2EBuilderTarget;
    'app-shell'?: AppShellBuilderTarget;
    'extract-i18n'?: ExtractI18nBuilderTarget;
    [key: string]: any;
}
