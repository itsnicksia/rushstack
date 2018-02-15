/**
 * Example documentation for the package.
 * 
 * @remarks
 * Additional remarks
 * 
 * @packagedocumentation
 */

import { ISimpleInterface } from 'api-extractor-test-01';
import { ReexportedClass } from 'api-extractor-test-01';
import * as semver1 from 'semver';

/**
 * An interface with a generic parameter.
 * @public
 */
export declare interface GenericInterface<T> {
    member: T;
}

/**
 * A class that inherits from a type defined in the "semver" module imported from \@types/semver.
 * @public
 */
export declare class ImportedModuleAsBaseClass extends semver3.SemVer {
}

/**
 * A generic parameter that references the "semver" module imported from \@types/semver.
 * @public
 */
export declare function importedModuleAsGenericParameter(): GenericInterface<semver2.SemVer> | undefined;

/**
 * This definition references the "semver" module imported from \@types/semver.
 * @public
 */
export declare function importedModuleAsReturnType(): semver1.SemVer | undefined;

/**
 * Example of a class that inherits from an externally imported class.
 * @public
 */
export declare class SubclassWithImport extends ReexportedClass implements ISimpleInterface {
    test(): void;
}
