import React from "react";
import {
  HStack,
  VStack,
  Text,
  Box,
  Progress,
  Divider,
  Button,
} from "native-base";
import { IconByName, Layout, t } from "@shiksha/common-lib";

export default function AgLearnerProfileView() {
  return (
    <Layout _appBar={{ name: t("AG_LEARNER_PROFILE") }}>
      <VStack paddingBottom="64px" bg="bgGreyColor.200">
        <VStack paddingLeft="16px" paddingRight="16px" space="24px">
          <VStack alignItems="Center">
            <IconByName
              name="AccountCircleLineIcon"
              color="#666666"
              _icon={{ size: "60" }}
            />
            <Text
              fontFamily="Inter"
              fontStyle="normal"
              fontSize="16px"
              color="#790000"
              fontWeight="600px"
            >
              Khushboo Verma
            </Text>
            <Box>{t("IDENTIFIED")}</Box>
          </VStack>

          <Box
            bg="#FAFAFA"
            borderColor="#E0E0E0"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <Text
                fontSize="14px"
                color="#212121"
                fontWeight="700"
                fontFamily="Inter"
                fontStyle="normal"
              >
                {t("PROFILE_DETAILS")}
              </Text>
              <Box paddingTop="2">
                <Progress value={45} size="xs" colorScheme="info" />
              </Box>
              <VStack space="2" paddingTop="5">
                <HStack alignItems="Center" justifyContent="space-between">
                  <HStack space="md" alignItems="Center">
                    <IconByName name="UserLineIcon" _icon={{ size: "20" }} />

                    <Text
                      fontSize="14px"
                      color="#212121E"
                      fontWeight="400"
                      fontFamily="Inter"
                      fontStyle="normal"
                    >
                      {t("BASIC_DETAILS")}
                    </Text>
                  </HStack>

                  <IconByName name="ArrowRightSLineIcon" color="#790000" />
                </HStack>
                <Divider orientation="horizontal" bg="#E0E0E0" thickness="1" />
                <HStack alignItems="Center" justifyContent="space-between">
                  <HStack alignItems="Center" space="md">
                    <IconByName name="MapPinLineIcon" _icon={{ size: "20" }} />

                    <Text
                      fontSize="14px"
                      color="#212121E"
                      fontWeight="400"
                      fontFamily="Inter"
                      fontStyle="normal"
                    >
                      {t("ADD_YOUR_ADDRESS")}
                    </Text>
                  </HStack>
                  <IconByName name="ArrowRightSLineIcon" color="#790000" />
                </HStack>
                <Divider orientation="horizontal" bg="#E0E0E0" thickness="1" />
                <HStack alignItems="Center" justifyContent="space-between">
                  <HStack alignItems="Center" space="md">
                    <IconByName name="AddLineIcon" _icon={{ size: "20" }} />

                    <Text
                      fontSize="14px"
                      color="#212121E"
                      fontWeight="400"
                      fontFamily="Inter"
                      fontStyle="normal"
                    >
                      {t("AADHAAR_DETAILS")}
                    </Text>
                  </HStack>

                  <IconByName name="ArrowRightSLineIcon" color="#790000" />
                </HStack>
              </VStack>
            </VStack>
          </Box>

          <Box
            bg="#FAFAFA"
            borderColor="#E0E0E0"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <Text
                  fontSize="14px"
                  color="#212121"
                  fontWeight="700"
                  fontFamily="Inter"
                  fontStyle="normal"
                >
                  {t("DOCUMENT_CHECKLIST")}
                </Text>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="#790000"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>

          <Box
            bg="#FAFAFA"
            borderColor="#E0E0E0"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <Text
                  fontSize="14px"
                  color="#212121"
                  fontWeight="700"
                  fontFamily="Inter"
                  fontStyle="normal"
                >
                  {t("ENROLLMENT_DETAILS")}
                </Text>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="#790000"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>

          <Box
            bg="#FAFAFA"
            borderColor="#E0E0E0"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <Text
                  fontSize="14px"
                  color="#212121"
                  fontWeight="700"
                  fontFamily="Inter"
                  fontStyle="normal"
                >
                  {t("CAMP_DETAILS")}
                </Text>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="#790000"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>

          <Box
            bg="#FAFAFA"
            borderColor="#E0E0E0"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <Text
                  fontSize="14px"
                  color="#212121"
                  fontWeight="700"
                  fontFamily="Inter"
                  fontStyle="normal"
                >
                  {t("JOURNEY_IN_PROJECT_PRAGATI")}
                </Text>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="#790000"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>
          <Button
            bgColor="white"
            borderColor="#790000"
            borderRadius="100px"
            borderWidth="2px"
          >
            <HStack alignItems="Center">
              <IconByName name="UserUnfollowLineIcon" color="#790000" />
              <Text
                color="#790000"
                fontSize="14px"
                fontWeight="700"
                fontFamily="Inter"
                fontStyle="normal"
              >
                {t("MARK_AS_DROPOUT")}
              </Text>
            </HStack>
          </Button>
        </VStack>
      </VStack>
    </Layout>
  );
}
