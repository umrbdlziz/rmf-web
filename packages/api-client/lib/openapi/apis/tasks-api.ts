/* tslint:disable */
/* eslint-disable */
/**
 * RMF API Server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CancelTask } from '../models';
import { HTTPValidationError } from '../models';
import { ModelObject } from '../models';
import { SubmitTask } from '../models';
import { SubmitTaskResponse } from '../models';
import { TaskProgress } from '../models';
/**
 * TasksApi - axios parameter creator
 * @export
 */
export const TasksApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Cancel Task
     * @param {CancelTask} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelTaskTasksCancelTaskPost: async (
      body: CancelTask,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling cancelTaskTasksCancelTaskPost.',
        );
      }
      const localVarPath = `/tasks/cancel_task`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com');
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || '';

      return {
        url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get Tasks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTasksTasksGetTasksGet: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/tasks/get_tasks`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com');
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Submit Task
     * @param {SubmitTask} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitTaskTasksSubmitTaskPost: async (
      body: SubmitTask,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling submitTaskTasksSubmitTaskPost.',
        );
      }
      const localVarPath = `/tasks/submit_task`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com');
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || '';

      return {
        url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TasksApi - functional programming interface
 * @export
 */
export const TasksApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Cancel Task
     * @param {CancelTask} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async cancelTaskTasksCancelTaskPost(
      body: CancelTask,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelObject>> {
      const localVarAxiosArgs = await TasksApiAxiosParamCreator(
        configuration,
      ).cancelTaskTasksCancelTaskPost(body, options);
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Get Tasks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTasksTasksGetTasksGet(
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaskProgress>>> {
      const localVarAxiosArgs = await TasksApiAxiosParamCreator(
        configuration,
      ).getTasksTasksGetTasksGet(options);
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Submit Task
     * @param {SubmitTask} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async submitTaskTasksSubmitTaskPost(
      body: SubmitTask,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmitTaskResponse>> {
      const localVarAxiosArgs = await TasksApiAxiosParamCreator(
        configuration,
      ).submitTaskTasksSubmitTaskPost(body, options);
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * TasksApi - factory interface
 * @export
 */
export const TasksApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  return {
    /**
     *
     * @summary Cancel Task
     * @param {CancelTask} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelTaskTasksCancelTaskPost(body: CancelTask, options?: any): AxiosPromise<ModelObject> {
      return TasksApiFp(configuration)
        .cancelTaskTasksCancelTaskPost(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get Tasks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTasksTasksGetTasksGet(options?: any): AxiosPromise<Array<TaskProgress>> {
      return TasksApiFp(configuration)
        .getTasksTasksGetTasksGet(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Submit Task
     * @param {SubmitTask} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitTaskTasksSubmitTaskPost(
      body: SubmitTask,
      options?: any,
    ): AxiosPromise<SubmitTaskResponse> {
      return TasksApiFp(configuration)
        .submitTaskTasksSubmitTaskPost(body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TasksApi - object-oriented interface
 * @export
 * @class TasksApi
 * @extends {BaseAPI}
 */
export class TasksApi extends BaseAPI {
  /**
   *
   * @summary Cancel Task
   * @param {CancelTask} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public cancelTaskTasksCancelTaskPost(body: CancelTask, options?: any) {
    return TasksApiFp(this.configuration)
      .cancelTaskTasksCancelTaskPost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Get Tasks
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public getTasksTasksGetTasksGet(options?: any) {
    return TasksApiFp(this.configuration)
      .getTasksTasksGetTasksGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Submit Task
   * @param {SubmitTask} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TasksApi
   */
  public submitTaskTasksSubmitTaskPost(body: SubmitTask, options?: any) {
    return TasksApiFp(this.configuration)
      .submitTaskTasksSubmitTaskPost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
