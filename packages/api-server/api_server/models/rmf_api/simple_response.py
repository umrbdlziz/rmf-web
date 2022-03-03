# generated by datamodel-codegen:
#   filename:  simple_response.json

from __future__ import annotations

from enum import Enum
from typing import List, Union

from pydantic import BaseModel, Field

from . import error


class Failure(Enum):
    boolean_False = False


class Success(Enum):
    boolean_True = True


class SimpleResponseItem(BaseModel):
    success: Success


class SimpleResponseItem1(BaseModel):
    success: Failure
    errors: List[error.Error] = Field(
        ..., description="If the request failed, these error messages will explain why"
    )


class SimpleResponse(BaseModel):
    __root__: Union[SimpleResponseItem, SimpleResponseItem1] = Field(
        ...,
        description="Template for defining a response message that only indicates success and describes any errors",
        title="Simple Response",
    )