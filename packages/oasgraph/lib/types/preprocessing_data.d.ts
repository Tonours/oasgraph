/**
 * Type definitions for the data created during preprocessing.
 */
import { Operation, DataDefinition } from './operation';
import { InternalOptions } from './options';
import { SecuritySchemeObject, SchemaObject } from './oas3';
export declare type ProcessedSecurityScheme = {
    rawName: string;
    def: SecuritySchemeObject;
    /**
     * Stores the names of the authentication credentials
     * NOTE: Structure depends on the type of the protocol (basic, API key...)
     * NOTE: Mainly used for the AnyAuth viewers
     */
    parameters: {
        [key: string]: string;
    };
    /**
     * JSON schema to create the viewer for this security scheme from.
     */
    schema: SchemaObject;
};
export declare type PreprocessingData = {
    /**
     * List of Operation objects
     */
    operations: {
        [key: string]: Operation;
    };
    /**
     * List of all the used object names to avoid collision
     */
    usedOTNames: string[];
    /**
     * List of data definitions for JSON schemas already used.
     */
    defs: DataDefinition[];
    /**
     * The security definitions contained in the OAS. References are resolved.
     *
     * NOTE: Keys are beautified
     * NOTE: Does not contain OAuth 2.0-related security schemes
     */
    security: {
        [key: string]: ProcessedSecurityScheme;
    };
    /**
     * Mapping between beautified strings and their original ones
     */
    saneMap: {
        [key: string]: string;
    };
    /**
     * Options passed to OASGraph by the user
     */
    options: InternalOptions;
};
